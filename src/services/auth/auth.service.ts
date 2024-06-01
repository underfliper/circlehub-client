import { $fetch } from '@/lib/fetch/customFetch'
import {
  AuthResponse,
  AuthUserWithTokens,
  Credentials,
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
}

export const authService = new AuthService()
