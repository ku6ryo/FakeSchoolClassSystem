// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import faker from "faker"
import Student from "./Student.model"

export class FakeError extends Error {
  constructor (message: string) {
    super("fakeStudent FakeError: " + message)
  }
}

export default function fakeStudent (data?: any): Student {
  if (data && typeof data !== "object") {
    throw new FakeError("Given data is not an object. " + String(data))
  }
  const id: string = data["id"] || faker.()
  if (typeof id !== "string") {
    throw new FakeError("id is not a string")
  }
  const accountId: string = data["accountId"] || faker.()
  if (typeof accountId !== "string") {
    throw new FakeError("accountId is not a string")
  }
  const studentNumber: number = data["studentNumber"] || faker.()
  if (typeof studentNumber !== "number") {
    throw new FakeError("studentNumber is not a number")
  }
  const credits: number = data["credits"] || faker.()
  if (typeof credits !== "number") {
    throw new FakeError("credits is not a number")
  }
  return new Student(
    id,
    accountId,
    studentNumber,
    credits,
  )
}
