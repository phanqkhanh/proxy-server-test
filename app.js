import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()

app.use(bodyParser.json());

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' + process.env.NOTE })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})