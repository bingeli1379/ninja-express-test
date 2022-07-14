require('dotenv').config()

const express = require('express')
const app = express()

app.use((req, res, next) => {
  next()
})

app.get('/', (req, res) => {
  res.json({ message: 'message' })
})

app.listen(process.env.PORT)
