import express from 'express'
import mongoose from "mongoose"
import userRouter from './router/userRouter.js'



const mongoURI = "mongodb+srv://admin:1234@cluster0.ot8etbv.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoURI).then(
    () => {
        console.log("connected to monoDB")
    }
).catch(
    () => {
        console.log("Error connecting to mongoDB")
    }
)

const app = express()
app.use(express.json())
app.use("/users", userRouter) 


app.listen(3000,
    ()=>{
        console.log("server started")
    }
)