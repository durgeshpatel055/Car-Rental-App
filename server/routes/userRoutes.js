import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';

const userRouter = express.Routes();

userRoutes.post('/register', registerUser)
userRoutes.post('/login', loginUser)


export default userRouter ;