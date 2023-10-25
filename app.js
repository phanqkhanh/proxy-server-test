import express from 'express'
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()

app.use(bodyParser.json());

const port = process.env.PORT || 8080

app.get('/user', (req, res) => {
  res.json({ message: 'Get user' })
})

app.post('/', (req, res) => {
  res.json({ message: 'Post' })
})

app.get('/', (req, res) => {
  res.json({ message: 'Hello world!' + process.env.NOTE })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})