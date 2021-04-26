// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import Account from "./Account.model"
import Name from "./Name.model"
import parseName from "./Name.parser"

export class ParseError extends Error {
  constructor (message: string) {
    super("parseAccount ParseError: " + message)
  }
}

export default function parseAccount (data: any) {
  if (typeof data !== "object") {
    throw new ParseError("Given data is not an object. " + String(data))
  }
  const id: string = data["id"]
  if (typeof id !== "string") {
    throw new ParseError("id is not a string")
  }
  const type: number = data["type"]
  if (typeof type !== "number") {
    throw new ParseError("type is not a number")
  }
  const email: string = data["email"]
  if (typeof email !== "string") {
    throw new ParseError("email is not a string")
  }
  const name: Name = parseName(data["name"])
  return new Account(
    id,
    type,
    email,
    name,
  )
}