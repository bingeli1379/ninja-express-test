const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: 'get all' })
})

router.get('/:id', (req, res) => {
  res.json({ msg: 'get one' })
})

router.post('/', (req, res) => {
  res.json({ msg: 'create one' })
})

router.patch('/:id', (req, res) => {
  res.json({ msg: 'update one' })
})

router.delete('/:id', (req, res) => {
  res.json({ msg: 'delete one' })
})

module.exports = router
