import express from "express"
import setUpDb from "./repositories/db/setUpDb"
import { USER_REQUEST_HEADER } from "./constants"
import { ApplicationBuilder, NoEntrypointError } from "./Application"

export default async function configureApp (expressApp: express.Application) {
  const connection = await setUpDb()
  const app = (new ApplicationBuilder().connection(connection).build())
  expressApp.use(express.json())
  expressApp.use(async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (req.method !== "POST") {
      next()
      return
    }
    console.log(`[${new Date()}] ${req.url}`)
    let userHeader = null
    const userHeaders = req.headers[USER_REQUEST_HEADER]
    if (Array.isArray(userHeaders)) {
      userHeader = userHeaders[0]
    } else {
      userHeader = userHeaders || null
    }
    try {
      const entrypointName = req.url.replace(/^\//, "")
      const appRes = await app.receiveRequest(entrypointName, userHeader, {
        ...req.body
      })
      res.json(appRes)
    } catch (e) {
      if (e instanceof NoEntrypointError) {
        res.status(404).send({})
      }
      next(e)
    }
  })
}
