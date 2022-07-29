const express = require('express')
const Workout = require('../models/workoutModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: 'get all' })
})

router.get('/:id', (req, res) => {
  res.json({ msg: 'get one' })
})

router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body)
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.patch('/:id', (req, res) => {
  res.json({ msg: 'update one' })
})

router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete one' })
})

module.exports = router
