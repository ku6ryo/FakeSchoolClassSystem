export class PermissionError extends Error {
  constructor (message?: string) {
    super(message | "Permission denied.")
  }
}
