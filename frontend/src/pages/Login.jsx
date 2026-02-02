import { useState } from "react"
import { useAuth } from "../auth/AuthContext"
import { useNavigate, Link } from "react-router-dom"



const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const { login, loading, error } = useAuth()
const navigate = useNavigate()



const handleSubmit = async (event) => {
  event.preventDefault()
  try {
    await login(email, password)
    navigate("/")
  } catch (error) {
    alert("Invalid credentials", error)
  }
}


  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleSubmit} className='space-y-3'>
        <input
          className='input'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          className='input'
          type='password'
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className='btn-primary' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className='mt-4 text-sm'>
        No account ?{' '}
        <Link className='text-blue-600' to='/register'>
          Register
        </Link>{' '}
      </p>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  )
}

export default Login