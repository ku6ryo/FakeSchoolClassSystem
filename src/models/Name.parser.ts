import Name from "./Name"

export default function parseName (data: any) {
  const first: string = data["first"]
  if (typeof first !== "string") {
    throw new ParseError()
  }
  const last: string = data["last"]
  if (typeof last !== "string") {
    throw new ParseError()
  }
  return new Name(
    first,
    last,
  )
}
