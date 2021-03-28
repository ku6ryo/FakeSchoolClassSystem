import { PermissionError, } from "./errors"
import Account, { AccountType, } from "../models/Account"
import Name from "../models/Name"
import generateId from "../generators/id"
import AccountRepository from "../repositories/AccountRepository"

class PermissionService {
  canCreateAccount(account: Account | null) {
    return !account || account.getType() !== AccountType.ADMIN
  }
}

type CreateAccountRequest = {
  type: number,
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
      throw new PermissionError()
    }
    const id = generateId()
    const name = new Name(req.firstName, req.lastName)
    const account = new Account(id, req.type, name)
    this.#accountRepository.create(account)
  }
}
