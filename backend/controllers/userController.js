import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()


export const register = async (req, res) => {
try {
  // 1. Get the payload
  const { name, email, password } = req.body

  // 2. Check if the user already exists
  const user = await UserModel.findOne({ email })
  if (user) throw new Error('User already exists')

  // 3. Create a new user
  const newUser = await UserModel.create({ name, email, password })

  // 4. Get token
  const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET, { expiresIn: "12d"})
  // 4. Send the reponse
  res.status(201).json({ user: { id: newUser._id, name, email }, token })
} catch (error) {
  res.status(500).json({ error: error.message })
}
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if(!user) throw new Error("User not found", 400)
    
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) throw new Error("Invalid credentials", 400)

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.json({ token, user: { id: user._id, name: user.name, email } })
  } catch (error) {
       res.status(500).json({ error: error.message })
  }
}