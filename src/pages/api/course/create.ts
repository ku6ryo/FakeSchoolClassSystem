import { NextApiRequest, NextApiResponse } from "next"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const r = await fetch("http://localhost:3001")
  res.send(await r.json())
}
