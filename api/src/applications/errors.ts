export class PermissionError extends Error {
  constructor (message: string) {
    super("PermissionError : " + message)
  }
}
