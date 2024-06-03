export interface ApiResponse<T> {
  data: T
  status: number
}

export class ApiError extends Error {
  statusCode?: number
  title?: string

  constructor(statusCode?: number, message?: string, title?: string) {
    super(message)
    this.statusCode = statusCode
    this.title = title
  }
}
