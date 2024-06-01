export interface Credentials {
  email: string
  password: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface AuthUser {
  id: number
  email: string
  username: string
  name: string
  image: string
}

export interface AuthResponse {
  user: AuthUser
  tokens: AuthTokens
}

export interface AuthUserWithTokens extends AuthUser {
  tokens: AuthTokens
}
