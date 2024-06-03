export interface ApiResponse<T> {
  data: T
  status: number
  ok: boolean
}

export class ApiError extends Error {
  ok: boolean
  statusCode?: number
  title?: string
  target?: string

  constructor(
    ok: boolean,
    statusCode?: number,
    message?: string,
    title?: string,
    target?: string,
  ) {
    super(message)
    this.ok = ok
    this.statusCode = statusCode
    this.title = title
    this.target = target
  }
}
