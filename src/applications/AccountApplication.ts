import Account, { AccountType, } from "../models/Account"
import Name from "../models/Name"
import generateId from "../generators/id"
import { PermissionError, } from "./errors"

class PermissionService {
  canCreateAccount(account: Account) {
    return account.getType() !== AccountType.ADMIN
  }
}

type CreateAccountRequest = {
  type: string,
  firstName: string,
  lastName: string,
}

export default AccountApplication {
  #accountRepository: AccountRepository
  #permissionService: PermissionService

  constructor (
    accountRepository: AccountRepository,
    permissionService: PermissionService
  ) {
    this.#accountRepository = accountRepository
    this.#permissionService = permissionService
  }

  createAccount(
    creator: Account,
    req: CreateAccountRequest
  ) {
    if (!this.#permissionService.canCreateAccount()) {
      throw new PermissionError()
    }
    const id = generateId()
    const name = new Name(req.firstName, req.lastName)
    const account = new Account(id, req.type, name)
    this.#accountRepository.create(account)
  }
}
