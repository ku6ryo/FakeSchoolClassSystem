
export class InvalidPayloadError extends Error {
  constructor (message: string) {
    super("Invalid Payload: " + message)
  }
}

export class UnauthorizedError extends Error {
  constructor (message: string) {
    super("Unauthorized: " + message)
  }
}
