// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import Name from "./Name.model"
import isUuid from "validator/lib/isUuid"
import isEmail from "validator/lib/isEmail"

export class UnexpectedNullError extends Error {
  constructor () {
    super("Account UnexpectedNullError: If you see this, generated code by modelgun may be broken.")
  }
}

export class InvalidPropertyError extends Error {
  constructor (message: string) {
    super("Account InvalidPropertyError: " + message)
  }
}

/**
 * Account model.
 * System&#39;s account.
 */
export default class Account {
  #id: string | null = null
  #type: number | null = null
  #email: string | null = null
  #name: Name | null = null

  /**
   * @param string id 
   * @param number type 
   * @param string email 
   * @param Name name 
   */
  constructor (
    id: string,
    type: number,
    email: string,
    name: Name,
  ) {
    this.setId(id)
    this.setType(type)
    this.setEmail(email)
    this.setName(name)
  }

  /**
   * Gets id
   */
  getId (): string {
    if (this.#id === null) {
      throw new UnexpectedNullError()
    }
    return this.#id
  }

  /**
   * Checks id
   */
  checkId (value: string) {
    if (!isUuid(value)) {
      throw new InvalidPropertyError(`${value} is not UUID value. (Account.setId)`)
    }
  }

  /**
   * Sets id
   * @param value
   */
  setId (value: string) {
    this.checkId(value)
    this.#id = value
  }

  /**
   * Gets type
   */
  getType (): number {
    if (this.#type === null) {
      throw new UnexpectedNullError()
    }
    return this.#type
  }

  /**
   * Checks type
   */
  checkType (value: number) {
    if (![0, 1, 2, ].includes(value)) {
      throw new InvalidPropertyError(`${value} is not of candidates. (Account.setType)`)
    }
    if (value % 1 !== 0) {
      throw new InvalidPropertyError(`${value} is not an integer. (Account.setType)`)
    }
  }

  /**
   * Sets type
   * @param value
   */
  setType (value: number) {
    this.checkType(value)
    this.#type = value
  }

  /**
   * Gets email
   */
  getEmail (): string {
    if (this.#email === null) {
      throw new UnexpectedNullError()
    }
    return this.#email
  }

  /**
   * Checks email
   */
  checkEmail (value: string) {
    if (!isEmail(value)) {
      throw new InvalidPropertyError(`${value} is not Email value. (Account.setEmail)`)
    }
  }

  /**
   * Sets email
   * @param value
   */
  setEmail (value: string) {
    this.checkEmail(value)
    this.#email = value
  }

  /**
   * Gets name
   */
  getName (): Name {
    if (this.#name === null) {
      throw new UnexpectedNullError()
    }
    return this.#name
  }

  /**
   * Checks name
   */
  checkName (value: Name) {
  }

  /**
   * Sets name
   * @param value
   */
  setName (value: Name) {
    this.checkName(value)
    this.#name = value
  }

  /**
   * Clones 
   */
  clone (shallow: boolean) {
    return new Account (
      this.getId(),
      this.getType(),
      this.getEmail(),
      shallow ? this.getName() : this.getName().clone(false),
    )
  }

  /**
   * Creates an object.
   */
  toObject () {
    return {
      id: this.getId(),
      type: this.getType(),
      email: this.getEmail(),
      name: this.getName().toObject(),
    }
  }
}
