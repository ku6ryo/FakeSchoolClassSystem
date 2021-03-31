import { PermissionError, } from "./errors"
import Account from "../models/Account.model"
import Course from "../models/Course.model"
import CourseRegistration from "../models/CourseRegistration.model"
import CourseRepository from "../repositories/CourseRepository"
import CourseRegistrationRepository from "../repositories/CourseRegistrationRepository"
import StudentRepository from "../repositories/StudentRepository"
import PermissionService from "../services/PermissionService"
import generateId from "../generators/id"

export default class CourseApplication {
  #courseRepository: CourseRepository
  #courseRegistrationRepository: CourseRegistrationRepository
  #studentRepository: StudentRepository
  #permissionService: PermissionService

  constructor (
    courseRepository: CourseRepository,
    courseRegistrationRepository: CourseRegistrationRepository,
    studentRepository: StudentRepository,
    permissionService: PermissionService
  ) {
    this.#courseRepository = courseRepository
    this.#courseRegistrationRepository = courseRegistrationRepository
    this.#studentRepository = studentRepository
    this.#permissionService = permissionService
  }

  searchCourses (
    account: Account | null,
    query: string,
  ) {
    if (!this.#permissionService.canSearchCourses(account)) {
      throw new PermissionError("Creator cannot create account.")
    }
    this.#courseRepository.search(query)
  }

  registerCourse (
    account: Account | null,
    courseId: string,
  ) {
    if (!this.#permissionService.canTakeCourse(account)) {
      throw new PermissionError("Creator cannot create account.")
    }
    const student = this.#studentRepository.getByAccountId(account!.getId())
    const registrations = this.#courseRegistrationRepository.getByStudentId(student.getId())
    if (registrations.find((r) => r.getCourseId() === courseId)) {
      throw new Error("Already registered.")
    }
    try {
      const registration = new CourseRegistration(generateId(), courseId, student.getId())
      this.#courseRegistrationRepository.create(registration)
    } catch (e) {
      throw new Error("Error on creating registration. parameter may be.")
    }
  }
}
