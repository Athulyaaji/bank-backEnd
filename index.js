require('dotenv').config()

const router=require('./routes/router')

const express=require('express')
const cors=require('cors')

require('./dataBase/connection')



const server=express()


server.use(cors())
server.use(express.json())
server.use(router)

const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`____________bank server started at port number ${port}__________________`);
})