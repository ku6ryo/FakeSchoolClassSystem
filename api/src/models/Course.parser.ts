// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import Course from "./Course.model"

export class ParseError extends Error {
  constructor (message: string) {
    super("parseCourse ParseError: " + message)
  }
}

export default function parseCourse (data: any) {
  if (typeof data !== "object") {
    throw new ParseError("Given data is not an object. " + String(data))
  }
  const id: string = data["id"]
  if (typeof id !== "string") {
    throw new ParseError("id is not a string")
  }
  const displayId: string = data["displayId"]
  if (typeof displayId !== "string") {
    throw new ParseError("displayId is not a string")
  }
  const category: number = data["category"]
  if (typeof category !== "number") {
    throw new ParseError("category is not a number")
  }
  const name: string = data["name"]
  if (typeof name !== "string") {
    throw new ParseError("name is not a string")
  }
  const description: string = data["description"]
  if (typeof description !== "string") {
    throw new ParseError("description is not a string")
  }
  const credits: number = data["credits"]
  if (typeof credits !== "number") {
    throw new ParseError("credits is not a number")
  }
  return new Course(
    id,
    displayId,
    category,
    name,
    description,
    credits,
  )
}
