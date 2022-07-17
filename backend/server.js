require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts.js')

const app = express()

app.use(express.json())
app.use((req, res, next) => {
  next()
})

app.use('/api/workouts', workoutRoutes)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT)
    console.log(`listen on port: ${process.env.PORT}`)
  })
  .catch(err => {
    console.error(err)
  })
