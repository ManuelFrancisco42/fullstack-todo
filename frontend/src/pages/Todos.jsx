import { useEffect, useState } from "react"
import API from "../api/axios"
import { useAuth } from "../auth/AuthContext"



const Todos = () => {
   const [todos, setTodos] = useState([])
   const [title, setTitle] = useState("")
   const { logout, user } = useAuth()
   const [loading, setLoading] = useState(true)

/* ------------------------------- FETCH TODOS ------------------------------ */
  const fetchTodos = async () => {
    try {
      const res = await API.get('/todos')
      setTodos(res.data)
    } finally {
      setLoading(false)
    }
  }


  
  
  useEffect(() => {
    fetchTodos()
  }, [])
  
  if (loading) return <p>Loading todos...</p>

/* -------------------------------- ADD TODO -------------------------------- */
const addTodo = async (event) => {
  event.preventDefault()

  const res = await API.post("/todos", { title })
  setTodos([res.data, ...todos])
  setTitle("")
}


/* ------------------------------- DELETE TODO ------------------------------ */
const deleteTodo = async (id) => {
  await  API.delete(`/todos/${id}`, { title })
  setTodos(todos.filter(todo => todo._id !== id))
}


const toggleTodo = async (id, completed) => {
  const res = await API.put(`/todos/${id}`, { completed: !completed })

  setTodos(todos.map(todo => todo._id === id ? res.data : todo))
}

  return (
    <div>
      <h2 className='text-xl font-bold mb-2'>{user.name}'s Todos</h2>

      <button onClick={logout} className='text-sm text-red-500 mb-4'>
        Logout
      </button>

      <form onSubmit={addTodo} className='flex gap-2 mb-4'>
        <input
          className='input flex-5'
          type='text'
          placeholder='New todo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button className='btn-primary w-auto px-4'>Add</button>
      </form>

      <ul className='space-y-2'>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className='flex items-center justify-between border p-2 rounded'
          >
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo._id, todo.completed)}
              />
              <span
                className={todo.completed ? 'line-through text-gray-400' : ''}
              >
                {todo.title}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
