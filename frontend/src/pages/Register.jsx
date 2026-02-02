 import { useState } from 'react'
 import { useAuth } from '../auth/AuthContext'
 import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await register(name, email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Register</h2>

      <form onSubmit={handleSubmit} className='space-y-3'>
        <input
          className='input'
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className='input'
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='input'
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='btn-primary' disabled={loading}>
          {loading ? 'Creating account...' : 'Register'}
        </button>
      </form>

      <p>
        Already registered? <Link to='/login'>Login</Link>
      </p>
      {error && <p className='text-red-500 text-sm'>{error}</p>}
    </div>
  )
}


 export default Register
