import Account from "../models/Account.model"
import Name from "../models/Name.model"
import AccountRepositoryInterface from "./AccountRepositoryInterface"
import { Connection, Repository, } from "typeorm"
import AccountEntity from "./db/entities/Account"


export class AccountNotFound extends Error {
  constructor (id: string) {
    super("Account not found. id: " + id)
  }
}

export default class AccountRepository implements AccountRepositoryInterface {

  #repository: Repository<AccountEntity>

  constructor (connection: Connection) {
    this.#repository = connection.getRepository(AccountEntity)
  }

  async create (account: Account) {
    const entity = this.toTypeormEntity(account)
    await this.#repository.insert(entity)
  }

  async exists (id: string) {
    try {
      await this.get(id)
    } catch (e) {
      if (e instanceof AccountNotFound) {
        return false
      }
    }
    return true
  }

  async get (id: string) {
    const entity = await this.#repository.findOne(id)
    if (!entity) {
      throw new AccountNotFound(id)
    }
    return this.toModel(entity)
  }

  async update (account: Account) {
    await this.#repository.update(account.getId(), this.toTypeormEntity(account))
  }

  async delete (id: string) {
    await this.#repository.delete(id)
  }

  toTypeormEntity (account: Account) {
    const entity = new AccountEntity()
    entity.id = account.getId()
    entity.email = account.getEmail()
    entity.type = account.getType()
    entity.firstName = account.getName().getFirst()
    entity.lastName = account.getName().getLast()
    return entity
  }

  toModel (entity: AccountEntity) {
    const name = new Name(entity.firstName, entity.lastName)
    return new Account(
      entity.id,
      entity.type,
      entity.email,
      name
    )
  }
}
