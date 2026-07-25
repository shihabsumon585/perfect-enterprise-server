import app from "./app.js";
import config from "./config/index.js";
import { initDB } from "./db/db.js"

const port = config.port;

const main = () => {
  initDB()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
main();