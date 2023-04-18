const express = require('express')
const cors = require('cors')
const {connect_db} = require('./config/db')
const color = require("colors")
const authRoute = require('./routes/authRoute')
const studRoute = require("./routes/studRoute")
require('dotenv').config()

const app = express()


// middlewares
app.use(express.json())
app.use(cors({origin: true, credentials: true}));

// routes

app.use('/auth', authRoute)
app.use('/student', studRoute)

console.log(process.env.PORT)

app.listen(process.env.PORT, ()=>{
    connect_db()
    console.log("server is runing " + process.env.PORT)
})