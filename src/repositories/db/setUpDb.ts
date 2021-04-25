import path from "path"
import { ConnectionOptions, createConnection } from "typeorm"

export default async function setUpDb () {
  const options: ConnectionOptions = {
    type: "sqlite",
    database: path.join(__dirname, "../../../db.sqlite"),
    entities: [path.join(__dirname, "./entities/**/*.ts")],
  }
  return createConnection(options)
}
