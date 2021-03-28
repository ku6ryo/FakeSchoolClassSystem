import AccountApplication from "../applications/AccountApplication"
import EntrypointRequest from "../entrypoints/EntrypointRequest"
import { InvalidPayloadError, } from "./errors"

export default class AccontEntrypoint {
  #accountApp: AccountApplication
  constructor (accountApp: AccountApplication) {
    this.#accountApp = accountApp
  }

  createAccount(request: EntrypointRequest) {
    const requester = request.getRequester()
    const payload = request.getPayload()
    if (!payload.firstName || payload.firstName) {
      throw new InvalidPayloadError()
    }
    if (!payload.lastName) {
      throw new InvalidPayloadError()
    }
    if (!payload.type) {
      throw new InvalidPayloadError()
    }
    const creationRequest = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      type: payload.type,
    }
    this.#accountApp.createAccount(requester, creationRequest)
  }
}
