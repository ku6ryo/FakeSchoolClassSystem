import path from "path"
import { ConnectionOptions, createConnection } from "typeorm"
import Account from "./entities/Account"

export default async function setUpDb () {
  const options: ConnectionOptions = {
    type: "sqlite",
    database: path.join(__dirname, "../../../db.sqlite"),
    entities: [Account],
  }
  return await createConnection(options)
}
