import express from 'express'
import mongoose from "mongoose"
import userRouter from './router/userRouter.js'
import productRouter from './router/productRouter.js'
import authorizeUser from './lib/jwtMiddleware.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config() //loading env variables to this page


//to connect to mongoDB
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI).then(
    () => {
        console.log("connected to monoDB")
    }
).catch(
    () => {
        console.log("Error connecting to mongoDB")
    }
)

//to create express app
const app = express()
app.use(cors()) // to allow requests from frontend
app.use(express.json()) // to arrange request (middleware)

app.use(authorizeUser) // to authorize user for protected routes

app.use("/api/users", userRouter) // localhost:3000/users
app.use("/api/products", productRouter) // localhost:3000/products

//to start server
app.listen(3000,
    ()=>{
        console.log("server started")
    }
)