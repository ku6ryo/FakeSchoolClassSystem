import Course from "./Course"

export default function parseCourse (data: any) {
  const id: string = data["id"]
  if (typeof id !== "string") {
    throw new ParseError()
  }
  if (!isUuid(id)) {
    throw new ParseError()
  }
  const displayId: string = data["displayId"]
  if (typeof displayId !== "string") {
    throw new ParseError()
  }
  const category: number = data["category"]
  if (typeof category !== "number") {
    throw new ParseError()
  }
  const name: string = data["name"]
  if (typeof name !== "string") {
    throw new ParseError()
  }
  const hasExam: boolean = data["hasExam"]
  if (typeof hasExam !== "boolean") {
    throw new ParseError()
  }
  return new Course(
    id,
    displayId,
    category,
    name,
    hasExam,
  )
}
