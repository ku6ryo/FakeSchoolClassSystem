import { PermissionError, } from "./errors"
import Account from "../models/Account.model"
import AccountType from "../models/AccountType"
import Course from "../models/Course.model"
import CourseCreationRequest from "../models/CourseCreationRequest.model"
import CourseRepository, {
  CourseSearchResult,
} from "../repositories/CourseRepositoryInterface"
import PermissionService from "../services/PermissionService"
import generateId from "../generators/id"

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

  createCourse (account: Account, req: CourseCreationRequest): Course {
    if (account.getType() !== AccountType.ADMIN) {
      throw new Error("Requester is not an admin.")
    }
    const id = generateId()
    const course = new Course(
      id,
      req.getDisplayId(),
      req.getCategory(),
      req.getName(),
      req.getDescription(),
      req.getCredits(),
    )
    this.#courseRepository.create(course)
    return course
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
