// This file is auto-generated by ModelGun code generator.
// https://github.com/ku6ryo/ModelGun
// PLEASE DO NOT EDIT. If you want to extend the functionality, please import
// the export members and use as a part or inherit class.

import isUuid from "validator/lib/isUuid"

export class UnexpectedNullError extends Error {
  constructor () {
    super("Term UnexpectedNullError: If you see this, generated code by modelgun may be broken.")
  }
}

export class InvalidPropertyError extends Error {
  constructor (message: string) {
    super("Term InvalidPropertyError: " + message)
  }
}

/**
 * Term model.
 * 
 */
export default class Term {
  #id: string | null = null
  #name: string | null = null
  #grade: number | null = null

  /**
   * @param string id 
   * @param string name 
   * @param number grade 
   */
  constructor (
    id: string,
    name: string,
    grade: number,
  ) {
    this.setId(id)
    this.setName(name)
    this.setGrade(grade)
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
      throw new InvalidPropertyError(`${value} is not UUID value. (Term.setId)`)
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
   * Gets name
   */
  getName (): string {
    if (this.#name === null) {
      throw new UnexpectedNullError()
    }
    return this.#name
  }

  /**
   * Checks name
   */
  checkName (value: string) {
  }

  /**
   * Sets name
   * @param value
   */
  setName (value: string) {
    this.checkName(value)
    this.#name = value
  }

  /**
   * Gets grade
   */
  getGrade (): number {
    if (this.#grade === null) {
      throw new UnexpectedNullError()
    }
    return this.#grade
  }

  /**
   * Checks grade
   */
  checkGrade (value: number) {
    if (value % 1 !== 0) {
      throw new InvalidPropertyError(`${value} is not an integer. (Term.setGrade)`)
    }
  }

  /**
   * Sets grade
   * @param value
   */
  setGrade (value: number) {
    this.checkGrade(value)
    this.#grade = value
  }

  /**
   * Clones 
   */
  clone (shallow: boolean) {
    return new Term (
      this.getId(),
      this.getName(),
      this.getGrade(),
    )
  }

  /**
   * Creates an object.
   */
  toObject () {
    return {
      id: this.getId(),
      name: this.getName(),
      grade: this.getGrade(),
    }
  }
}
