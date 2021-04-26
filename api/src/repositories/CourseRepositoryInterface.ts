import Course from "../models/Course.model"

export type CourseSearchResult = {
  courses: Course[],
  total: number
}

export class CourseNotFoundErro extends Error {
  constructor (courseId: string) {
    super(`Course not found. ID: ${courseId}`)
  }
}

export default interface CourseRepositoryInterface {
  create (course: Course): void
  get (id: string): Course
  exists (id: string): boolean
  getMultiple (ids: string[]): Course[]
  search (query: string): CourseSearchResult
  update (course: Course): void
  delete (id: string): void
}
