import Student from "../models/Student.model"

export default interface StudentRepositoryInterface {
  create (student: Student): void
  get (id: string): Student
  getByAccountId (id: string): Student
  update (student: Student): void
  delete (id: string): void
}
