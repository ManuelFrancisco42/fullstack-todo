import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Todos from "./pages/Todos"
import PrivateRoute from "./components/PrivateRoute"
import { AuthProvider } from "./auth/AuthContext"

function App() {
  

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='w-full max-w-md bg-white p-6 rounded-xl shadow'>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route
                path='/'
                element={
                  <PrivateRoute>
                    <Todos />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
