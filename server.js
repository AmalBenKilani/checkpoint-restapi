const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const connectDB=require('./helpers/connectDB')
const app=express()
const port=6000
app.use(express.json())

// connecting my DB
dotenv.config()
connectDB()

//routes

app.use('/api/user',require('./routes/userRoutes'))

app.listen(port,err=>err? console.log(err):console.log(`server is running on port ${port}`))
