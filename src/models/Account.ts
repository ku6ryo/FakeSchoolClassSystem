import isUuid from "../validators/isUuid"
import Name from "./Name"
import { ValidationError, } from "./errors"

export type AccountType = {
  ADMIN: 0,
  STUDENT: 1,
  TEACHER: 2,
}

export default class Account {
  #id: string
  #name: Name
  #type: number

  constructor (id: string, type: number, name: Name) {
    this.setId(id)
    this.setType(type)
    this.setName(name)
  }

  private getId(id: string) {
    return this.#id
  }

  private setId (id: string) {
    if (!isUuid(id)) {
      throw new ValidationError()
    }
    this.#id = id
  }

  private setType (type: number) {
    this.#type = type
  }

  private getType () {
    return this.#type
  }

  private getName () {
    return this.#name
  }

  private setName (name: Name) {
    this.#name = name
  }
}
