import Account from "./Account"
import Name from "./Name"
import parseName from "./Name.parser"

export default function parseAccount (data: any) {
  const id: string = data["id"]
  if (typeof id !== "string") {
    throw new ParseError()
  }
  if (!isUuid(id)) {
    throw new ParseError()
  }
  const type: number = data["type"]
  if (typeof type !== "number") {
    throw new ParseError()
  }
  const name: Name = parseName(data["name"])
  return new Account(
    id,
    type,
    name,
  )
}
