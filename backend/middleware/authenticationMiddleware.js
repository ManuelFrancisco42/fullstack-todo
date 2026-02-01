 import jwt from "jsonwebtoken"


 function authenticationMiddleware (req, res, next) {
  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("No token provided")
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded.id
    next()
     
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" })
  }
 }

 export default authenticationMiddleware