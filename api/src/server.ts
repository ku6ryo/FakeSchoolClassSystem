import express from "express"
import configureApp from "./configure"

const DEFAULT_PORT = 3001

;(() => {
  const app = express()
  // PORT is special. Treats as an exception env
  const port = Number(process.env.PORT) || DEFAULT_PORT
  try {
    configureApp(app)
  } catch (e) {
    console.error(e)
    app.use("*", (_, res) => {
      res.status(500).send("Set up failed.")
    })
  }
  app.listen(port, () => {
    console.log(`App Started`)
  })
})()
