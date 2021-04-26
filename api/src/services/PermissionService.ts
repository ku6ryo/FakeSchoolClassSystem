import Account from "../models/Account.model"
import AccountType from "../models/AccountType"

export default class PermissionService {
  canSearchCourses(account: Account | null) {
    return !!account
  }
  canTakeCourse(account: Account | null) {
    return !!account && account.getType() === AccountType.STUDENT
  }
  canCreateAccount(account: Account | null) {
    return !!account && account.getType() === AccountType.ADMIN
  }
}
