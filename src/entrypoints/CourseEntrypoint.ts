import { UnauthorizedError, } from "./errors"
import CourseApplication from "../applications/CourseApplication"
import EntrypointRequest from "../entrypoints/EntrypointRequest"
import CourseCreationRequest from "../models/CourseCreationRequest.model"
import CourseSearchRequest from "../models/CourseSearchRequest.model"

export default class CourseEntrypoint {
  #courseApp: CourseApplication
  constructor (courseApp: CourseApplication) {
    this.#courseApp = courseApp
  }

  createCourse(request: EntrypointRequest<CourseCreationRequest>) {
    const requester = request.getRequester()
    const payload = request.getPayload()
    if (!requester) {
      throw new UnauthorizedError("User not given.")
    }
    this.#courseApp.createCourse(requester, payload)
  }

  searchCourses(request: EntrypointRequest<CourseSearchRequest>) {
    const requester = request.getRequester()
    const payload = request.getPayload()
    if (!requester) {
      throw new UnauthorizedError("User not given.")
    }
    this.#courseApp.searchCourses(requester, payload.getQuery())
  }
}
