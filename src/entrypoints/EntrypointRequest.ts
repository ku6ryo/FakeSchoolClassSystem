import Account from "../models/Account.model"

export default class EntrypointRequest<T> {
  #requester: Account | null
  #payload: T
  constructor (requester: Account | null, payload: T) {
    this.#requester = requester
    this.#payload = payload
  }
  getRequester () {
    return this.#requester
  }
  getPayload () {
    return this.#payload
  }
}
