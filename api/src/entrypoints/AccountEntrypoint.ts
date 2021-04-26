import AccountApplication from "../applications/AccountApplication"
import EntrypointRequest from "../entrypoints/EntrypointRequest"
import { UnauthorizedError, } from "./errors"
import CreateAccountRequest from "../models/CreateAccountRequest.model"

export default class AccontEntrypoint {
  #accountApp: AccountApplication
  constructor (accountApp: AccountApplication) {
    this.#accountApp = accountApp
  }

  async createAccount(request: EntrypointRequest<CreateAccountRequest>) {
    const requester = request.getRequester()
    const payload = request.getPayload()
    if (!requester) {
      throw new UnauthorizedError("User not given.")
    }
    this.#accountApp.createAccount(requester, payload)
  }
}
