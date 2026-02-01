import TodoModel from "../models/TodoModel.js";


export const createTodoController = async (req, res) => {
   const { title } = req.body

  try {
    const todo = await TodoModel.create({ title, user: req.user })
    res.status(201).json(todo)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllTodoController = async (req, res) => {
  try {
    const todos = await TodoModel.find({ user: req.user}).sort({ createdAt: -1 })
    
    res.json(todos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateTodoController = async (req, res) => {
try {
  const todo = await TodoModel.findByIdAndUpdate({ _id: req.params.id, user: req.user}, req.body, { new: true })
    res.json(todo)
} catch (error) {
  res.status(500).json({ error: error.message })
}
}


export const deleteTodoController = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete({ _id: req.params.id, user: req.user})
    res.json({ msg: "Todo delete"})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}