import CourseRegistration from "../models/CourseRegistration.model"

export default interface CourseRegistrationRepositoryInterface {
  create (registration: CourseRegistration): void
  get (id: string): CourseRegistration
  getByStudentId (studentId: string): CourseRegistration[]
  update (registration: CourseRegistration): void
  delete (id: string): void
}
