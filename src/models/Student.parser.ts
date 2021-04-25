// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import Student from "./Student.model"

export class ParseError extends Error {
  constructor (message: string) {
    super("parseStudent ParseError: " + message)
  }
}

export default function parseStudent (data: any) {
  if (typeof data !== "object") {
    throw new ParseError("Given data is not an object. " + String(data))
  }
  const id: string = data["id"]
  if (typeof id !== "string") {
    throw new ParseError("id is not a string")
  }
  const accountId: string = data["accountId"]
  if (typeof accountId !== "string") {
    throw new ParseError("accountId is not a string")
  }
  const studentNumber: number = data["studentNumber"]
  if (typeof studentNumber !== "number") {
    throw new ParseError("studentNumber is not a number")
  }
  const credits: number = data["credits"]
  if (typeof credits !== "number") {
    throw new ParseError("credits is not a number")
  }
  return new Student(
    id,
    accountId,
    studentNumber,
    credits,
  )
}