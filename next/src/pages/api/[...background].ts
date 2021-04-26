import { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default async function (nextReq: NextApiRequest, nextRes: NextApiResponse) {
  try {
    const res = await axios.post("http://localhost:3001/", nextReq.body)
    nextRes.json(res.data)
  } catch (e) {
    nextRes.json({
      message: "error"
    })
  }
}
