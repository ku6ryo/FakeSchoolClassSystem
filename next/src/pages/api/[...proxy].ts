import { NextApiRequest, NextApiResponse } from "next"
import axios, { AxiosError } from "axios"
import { getSession } from "next-auth/client"

export default async function (nextReq: NextApiRequest, nextRes: NextApiResponse) {
  const session = await getSession({
    req: nextReq
  })
  try {
    const url = `${process.env.BACKEND_API_BASE_PATH}${nextReq.url.replace("/api/proxy/", "")}`
    const res = await axios.post(
      url,
      nextReq.body,
      {
        headers: {
          "X-SCHOOL-USER": session?.user?.email
        }
      }
    )
    nextRes.json(res.data)
  } catch (e) {
    const res = (e as AxiosError).response
    nextRes.status(res.status).json(res.data)
  }
}
