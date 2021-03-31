import { PermissionError, } from "./errors"
import Account from "../models/Account.model"
import Name from "../models/Name.model"
import generateId from "../generators/id"
import AccountRepository from "../repositories/AccountRepository"
import PermissionService from "../services/PermissionService"


type CreateAccountRequest = {
  type: number,
  email: string,
  firstName: string,
  lastName: string,
}

export default class AccountApplication {
  #accountRepository: AccountRepository
  #permissionService: PermissionService

  constructor (
    accountRepository: AccountRepository,
    permissionService: PermissionService
  ) {
    this.#accountRepository = accountRepository
    this.#permissionService = permissionService
  }

  createAccount (
    creator: Account | null,
    req: CreateAccountRequest
  ) {
    if (!this.#permissionService.canCreateAccount(creator)) {
      throw new PermissionError("Creator cannot create account.")
    }
    const id = generateId()
    const name = new Name(req.firstName, req.lastName)
    const account = new Account(id, req.type, name, req.email)
    this.#accountRepository.create(account)
  }
}
