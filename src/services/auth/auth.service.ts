import { $fetch } from '@/lib/fetch/customFetch'
import {
  AuthResponse,
  AuthUserWithTokens,
  Credentials,
  SignUpData,
} from '@/types/auth.types'

class AuthService {
  async SignIn(credentials: Credentials): Promise<AuthUserWithTokens> {
    try {
      const { data } = await $fetch.post<AuthResponse>(
        '/auth/signin',
        false,
        credentials,
      )

      const { user, tokens } = data

      return { ...user, tokens: { ...tokens } }
    } catch (error) {
      throw error
    }
  }

  async SignUp(data: SignUpData) {
    try {
      const response = await $fetch.post('/auth/signup', false, data)

      return response
    } catch (error) {
      throw error
    }
  }
}

export const authService = new AuthService()
