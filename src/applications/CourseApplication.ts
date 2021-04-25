import { PermissionError, } from "./errors"
import Account from "../models/Account.model"
import CourseRepository, {
  CourseSearchResult,
} from "../repositories/CourseRepositoryInterface"
import PermissionService from "../services/PermissionService"

export default class CourseApplication {
  #courseRepository: CourseRepository
  #permissionService: PermissionService

  constructor (
    courseRepository: CourseRepository,
    permissionService: PermissionService
  ) {
    this.#courseRepository = courseRepository
    this.#permissionService = permissionService
  }

  searchCourses (
    account: Account | null,
    query: string,
  ): CourseSearchResult {
    if (!this.#permissionService.canSearchCourses(account)) {
      throw new PermissionError("Requester cannot create accounts.")
    }
    return this.#courseRepository.search(query)
  }
}
