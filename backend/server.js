require('dotenv').config()

const express = require('express')
const app = express()

const workoutRoutes = require('./routes/workouts.js')

app.use(express.json())
app.use((req, res, next) => {
  next()
})

app.use('/api/workouts', workoutRoutes)

app.listen(process.env.PORT)
