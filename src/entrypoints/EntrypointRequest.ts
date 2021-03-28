import Account from "../models/Account"

export default class EntrypointRequest {
  #requester: Account | null
  #payload: any
  constructor (requester: Account | null, payload: any) {
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
