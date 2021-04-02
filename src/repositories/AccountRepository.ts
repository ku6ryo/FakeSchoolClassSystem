import Account from "../models/Account.model"
import fakeAccount from "../models/Account.faker"


let accounts = Array(100).map(() => {
  return fakeAccount()
})

export default class AccountRepository {
  create (account: Account) {
    accounts.push(account)
  }
  get (id: string) {
    return accounts.find((account) => {
      return id === account.getId()
    }) || null
  }
  update (account: Account) {
    this.delete(account.getId())
    this.create(account)
  }
  delete (id: string) {
    accounts = accounts.filter(account => {
      return account.getId() !== id
    })
  }
}
