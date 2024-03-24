const express=require("express")
require("dotenv").config()
const path=require("path")
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")


require("./model/connectionMongoDB");
const { authenticateToken }=require("./middlewares/authenticateTheToken")
const { signupRoute } = require("./routes/signup")
const { signinRoute } = require("./routes/signin")

const app=express()
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({
    extended:true
}))


app.get("/auth",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","auth.html"))
})


// signup route
app.use(signupRoute)

// signin route
app.use(signinRoute)



app.use(authenticateToken)


app.get("/logout",(req,res)=>{
    res.clearCookie('token').send("logout")
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","home.html"))
})
app.get("*",(req,res)=>{
    res.send("Not a Route")
})



const port=process.env.port || 3000;


app.listen(3000,()=>{
    console.log(`Listening at port    ${port}`)
})

