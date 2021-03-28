
export class InvalidPropertyError extends Error {
  constructor (message?: string) {
    super("Invalid property" + (message ? `: ${message}` : ""))
  }
}

export class UnexpectedNullError extends Error {
  constructor (message?: string) {
    super("Unexpected Error" + (message ? `: ${message}` : ""))
  }
}
