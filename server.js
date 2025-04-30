const express = require('express')
const logger = require('morgan')

const Task = require('./models/tasks.js')

const db = require('./db')

const app = express()

app.use(logger('dev'))

app.post('/tasks', async (req, res) => {
  const newTask = await Task.create({
    text: "Clean Our Room",
    isComplete: false
  })
  res.send(newTask)
})

app.get('/tasks/:id', async (req, res) => {
  const task = await Task.findById(req.params.id)
  res.send(task)
})

app.use('/', (req, res) => {
  res.send('Our app is connected . . . ')
})

app.listen(3000, () => {
  console.log("Running Server on Port 3000 . . . ")
})