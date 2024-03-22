const express=require("express")
require("dotenv").config()

const app=express()


const port=process.env.port || 3000
app.listen(3000,()=>{
    console.log(`Listening at port    ${port}`)
})