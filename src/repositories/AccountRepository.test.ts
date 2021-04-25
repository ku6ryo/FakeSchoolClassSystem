import generateId from "../generators/id"
import AccountRepository from "./AccountRepository"
import setUpDb from "./db/setUpDb"
import AccountType from "../models/AccountType"
import Account from "../models/Account.model"
import Name from "../models/Name.model"
import faker from "faker"

test("Create / Get", async () => {
  const connection = await setUpDb()
  const repo = new AccountRepository(connection)

  const id = generateId()
  const type = AccountType.ADMIN
  const email = faker.internet.email()
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  await repo.create(new Account(id, type, email, new Name(firstName, lastName)))
  const created  = await repo.get(id)

  expect(created.getId()).toBe(id)
  expect(created.getType()).toBe(type)
  expect(created.getEmail()).toBe(email)
  expect(created.getName().getFirst()).toBe(firstName)
  expect(created.getName().getLast()).toBe(lastName)

  await connection.close()
})
