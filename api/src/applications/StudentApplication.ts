import { PermissionError, } from "./errors"
import Account from "../models/Account.model"
import CourseRegistration from "../models/CourseRegistration.model"
import CourseRepository from "../repositories/CourseRepositoryInterface"
import CourseRegistrationRepository from "../repositories/CourseRegistrationRepositoryInterface"
import StudentRepository from "../repositories/StudentRepositoryInterface"
import PermissionService from "../services/PermissionService"
import generateId from "../generators/id"

export default class StudentApplication {

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

  registerCourse (
    account: Account | null,
    courseId: string,
  ) {
    if (!this.#permissionService.canTakeCourse(account)) {
      throw new PermissionError("Requester cannot create account.")
    }
    if (!this.#courseRepository.exists(courseId)) {
      throw new Error("Course not found.")
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
      throw new Error("Error on creating registration. parameter may be wrong.")
    }
  }
}
