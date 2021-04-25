import { createServer } from "http"
import { parse } from "url"
import next from "next"
import setUpDb from "./repositories/db/setUpDb"
import { getConnection, getConnectionManager } from "typeorm"
import AccountRepository from "./repositories/AccountRepository"
import AccountApplication from "./applications/AccountApplication"
import AccountEntrypoint from "./entrypoints/AccountEntrypoint"
import EntrypointRequest from "./entrypoints/EntrypointRequest"
import PermissionService from "./services/PermissionService"
import Account from "./models/Account.model"
import Name from "./models/Name.model"
import parseCreateAccountRequest from "./models/CreateAccountRequest.parser"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
  const connection = await setUpDb()
  const ep = new AccountEntrypoint(
    new AccountApplication(
      new AccountRepository(getConnection()),
      new PermissionService()
    )
  )
  createServer(async (req, res) => {
    await ep.createAccount(new EntrypointRequest(
      new Account("ff09c0da-ffb2-4c64-93c1-50a5faf7fe38", 0, "ku6ryo@gmail.com", new Name("Ryo", "Kuroyanagi")),
      parseCreateAccountRequest({
        "type": 0,
        "email": "hoge@hoge.com",
        "firstName": "a",
        "lastName": "b",
      })
    ))
    res.end('{"a": 0}')
  }).listen(3001, (err) => {
  })
})()
