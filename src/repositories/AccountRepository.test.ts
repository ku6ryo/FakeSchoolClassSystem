import generateId from "../generators/id"
import AccountRepository from "./AccountRepository"
import setUpDb from "./db/setUpDb"
import AccountType from "../models/AccountType"
import Account from "../models/Account.model"
import Name from "../models/Name.model"
import faker from "faker"
import { getConnection } from "typeorm"

beforeAll(async () => {
  await setUpDb()
})

afterEach(async () => {
  const connection = getConnection()
  const entities = connection.entityMetadatas;
  for (const entity of entities) {
    const repository = connection.getRepository(entity.name)
    await repository.clear()
  }
})

afterAll(async () => {
  await getConnection().close()
})

test("Create / Get", async () => {
  const connection = getConnection()
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
})

test("Update", async () => {
  const connection = getConnection()
  const repo = new AccountRepository(connection)
  const id = generateId()
  const type = AccountType.ADMIN
  const email = faker.internet.email()
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  const account = new Account(id, type, email, new Name(firstName, lastName))
  await repo.create(account)
  await repo.get(id)

  const newEmail = faker.internet.email()
  account.setEmail(newEmail)

  await repo.update(account)
  const updated = await repo.get(id)
  expect(updated.getEmail()).toBe(newEmail)
})

test("Delete", async () => {
  const connection = getConnection()
  const repo = new AccountRepository(connection)
  const id = generateId()
  const type = AccountType.ADMIN
  const email = faker.internet.email()
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  await repo.create(new Account(id, type, email, new Name(firstName, lastName)))
  await repo.delete(id)

  expect(await repo.exists(id)).toBe(false)
})
