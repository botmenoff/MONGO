const db= require("./database/connect");
db.createConnection();

const dotenv = require("dotenv")
dotenv.config({ path: "./"})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

