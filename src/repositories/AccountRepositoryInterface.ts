import Account from "../models/Account.model"


export default interface AccountRepositoryInterface {
  exists (id: string): Promise<boolean>
  create (account: Account): Promise<void>
  delete (id: string): Promise<void>
  get (id: string): Promise<Account>
  update (account: Account): Promise<void>
}
