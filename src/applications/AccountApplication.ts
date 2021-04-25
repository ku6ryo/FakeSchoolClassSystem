import { PermissionError, } from "./errors"
import Account from "../models/Account.model"
import Name from "../models/Name.model"
import generateId from "../generators/id"
import AccountRepository from "../repositories/AccountRepository"
import PermissionService from "../services/PermissionService"
import CreateAccountRequest from "../models/CreateAccountRequest.model"

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
    creator: Account,
    req: CreateAccountRequest
  ) {
    if (!this.#permissionService.canCreateAccount(creator)) {
      throw new PermissionError("Creator cannot create account.")
    }
    const id = generateId()
    const name = new Name("", "")
    const account = new Account(id, req.getType(), req.getEmail(), name)
    this.#accountRepository.create(account)
  }
}
