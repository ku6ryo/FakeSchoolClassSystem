import Account from "../models/Account.model"


export default interface AccountRepositoryInterface {
  create (account: Account): void
  get (id: string): Account
  update (account: Account): void
  delete (id: string): void
}
