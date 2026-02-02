import { createContext, useContext, useState } from 'react'
import API from '../api/axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  /* ---------------------------------- LOGIN --------------------------------- */
  const login = async (email, password) => {
    try {
      setLoading(true)
      setError(null)

      const res = await API.post('/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      setUser(res.data.user)
    } catch (err) {
      setError('Invalid email or password')
      throw err
    } finally {
      setLoading(false)
    }
  }


  /* -------------------------------- REGISTER -------------------------------- */
  const register = async (name, email, password) => {
    try {
      setLoading(true)
      setError(null)

      const res = await API.post('/auth/register', { name, email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      setUser(res.data.user)
    } catch (err) {
      setError('Registration failed')
      throw err
    } finally {
      setLoading(false)
    }
  }


  /* --------------------------------- LOGOUT --------------------------------- */
  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
