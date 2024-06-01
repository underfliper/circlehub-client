import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../auth/next-auth.lib'

class CustomFetch {
  private API_URL = process.env.NEXT_PUBLIC_API_URL as string

  constructor(private defaultHeaders: HeadersInit = {}) {}

  private async getAccessToken(): Promise<string | null> {
    const session = await getServerSession(nextAuthOptions)

    if (!session) return null

    const { user } = session

    return user.tokens.accessToken
  }

  private async request<T>(
    path: string,
    isAuth: boolean,
    options?: RequestInit,
  ) {
    const url = `${this.API_URL}${path}`

    const authorizationHeader: HeadersInit = isAuth
      ? { Authorization: `Bearer ${await this.getAccessToken()}` }
      : {}

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...this.defaultHeaders,
          ...authorizationHeader,
          ...options?.headers,
        },
        ...options,
      })

      const data = (await response.json()) as T

      return {
        data,
        status: response.status,
      }
    } catch (error) {
      throw error
    }
  }

  get<T>(path: string, isAuth: boolean, options?: RequestInit) {
    return this.request<T>(path, isAuth, { ...options, method: 'GET' })
  }

  post<T>(path: string, isAuth: boolean, body?: any, options?: RequestInit) {
    return this.request<T>(path, isAuth, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
  }

  put<T>(path: string, isAuth: boolean, body?: any, options?: RequestInit) {
    return this.request<T>(path, isAuth, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    })
  }

  delete<T>(path: string, isAuth: boolean, options?: RequestInit) {
    return this.request<T>(path, isAuth, { ...options, method: 'DELETE' })
  }
}

export const $fetch = new CustomFetch()
