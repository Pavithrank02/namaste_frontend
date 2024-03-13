const express = require('express')
const bodyParser = require('body-parser')
const PORT = 5111
const app = express()

app.use(bodyParser.json())

app.all('/', (req, res) => {
  res.send("im up")
})

const todos = [{
  id: 1,
  title: "Task 1",
  completed: false,
}, {
  id: 2,
  title: "Task 2",
  completed: true,
}]
// Read
app.get('/todos', (req, res) => {
  res.json(todos)
})

// Create
app.post('/todos', (req, res) => {
  const newTodo = req.body
  todos.push(newTodo)
  res.status(201).json({
    message: "New todo added"
  })
})

//UPDATE
app.put('/todos/:id', (req, res) => {
  const newTodoData = req.body
  const todoParamsId = req.params.id
  const todoIndex = todos.find(td => td.id === todoParamsId)
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamsId,
      ...newTodoData,
    }
    res.json({
      message: "Todo Updated Successfully"
    })
  } else {
    res.status(400).json({
      message: "Error occured with id not exist"
    })
  }
})

//Delete
app.delete('/todos/:id', (req, res) => {
  const todoParamsId = req.params.id
  const todoIndex = todos.find(td => td.id === todoParamsId)
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1)
  }
  res.json({
    message: "Todo deleted Successfully"
  })
})
app.listen(PORT, () => {
  console.log("server is running in", PORT)
})