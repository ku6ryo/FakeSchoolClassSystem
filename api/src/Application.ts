import AccountRepository from "./repositories/AccountRepository"
import AccountApplication from "./applications/AccountApplication"
import AccountEntrypoint from "./entrypoints/AccountEntrypoint"
import EntrypointRequest from "./entrypoints/EntrypointRequest"
import PermissionService from "./services/PermissionService"
import parseCreateAccountRequest from "./models/CreateAccountRequest.parser"
import Account from "./models/Account.model"
import Name from "./models/Name.model"
import { Connection } from "typeorm"


export class NoEntrypointError extends Error {
  constructor (entrypointName: string) {
    super("NoEntrypointError: " + entrypointName)
  }
}

export class ApplicationBuilder {
  #connection: Connection | null = null

  connection (c: Connection) {
    this.#connection = c
    return this
  }

  build () {
    if (!this.#connection) {
      throw new Error("connection not given")
    }
    return new Application(
      new AccountEntrypoint(
        new AccountApplication(
          new AccountRepository(this.#connection),
          new PermissionService()
        )
      )
    )
  }
}

export default class Application {

  constructor (
    private accountEntrypoint: AccountEntrypoint,
  ) {
  }

  receiveRequest(name: string, email: string | null, payload: any): any {
    let account = null
    if (email) {
      account = new Account(
        "d72fcb6d-ce8b-4c41-a026-f0903e0aae15",
        0,
        email,
        new Name("ryo", "Kuroyanagi")
      )
    }
    switch (name) {
      case "account.createAccount":
        return this.account_createAccount(account, payload)
      default:
        break
    }
  }

  private account_createAccount(account: Account | null, payload: any) {
    const req = new EntrypointRequest(account, parseCreateAccountRequest(payload))
    return this.accountEntrypoint.createAccount(req)
  }
}
