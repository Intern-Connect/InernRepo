const express = require('express')
const cors = require('cors')
const {connect_db} = require('./config/db')
const color = require("colors")

require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())
app.use(cors({origin: true, credentials: true}));


app.listen(process.env.PORT, ()=>{
    connect_db()
    console.log("server is runing")
})