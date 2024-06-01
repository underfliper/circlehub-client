import { NextAuthOptions, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { jwtDecode } from 'jwt-decode'
import { authService } from '@/services/auth/auth.service'
import { $fetch } from '../fetch/customFetch'
import { AuthTokens } from '@/types/auth.types'

const isTokenExpire = (token: string) => {
  const { exp } = jwtDecode<{ exp: number }>(token)
  const now = Date.now()

  return exp * 1000 < now
}

const refreshToken = async (token: JWT): Promise<JWT> => {
  const { user: data } = token
  const { data: tokens } = await $fetch.post<AuthTokens>(
    '/auth/refresh',
    false,
    null,
    {
      headers: { Authorization: `Bearer ${data.tokens.refreshToken}` },
    },
  )

  token.user.tokens = tokens

  return token
}

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          return Promise.reject({
            message: 'Все поля должны быть заполнены',
          })

        try {
          const user = await authService.SignIn({
            email: credentials.email,
            password: credentials.password,
          })

          return user
        } catch (e: any) {
          return Promise.reject({
            message: e.message,
          })
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, user: user as User }

      const { user: data } = token

      if (!isTokenExpire(data.tokens.accessToken)) return token

      return refreshToken(token)
    },
    async session({ session, token }) {
      session.user = token.user

      return session
    },
  },
}
