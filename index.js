const express=require("express")
require("dotenv").config()
const path=require("path")
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")


require("./model/connectionMongoDB");
const { authenticateToken }=require("./middlewares/authenticateTheToken")
const { signupRoute } = require("./routes/signup")
const { signinRoute } = require("./routes/signin")
const {getNewsData}=require("./routes/getNewsData")
const {auth}=require("./handlers/auth")
const{logoutRoute}=require("./routes/logout")


const app=express()
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({
    extended:true
}))


app.get("/auth",auth)


// signup route
app.use(signupRoute)

// signin route
app.use(signinRoute)

// middleware for check token
app.use(authenticateToken)

// get news data
app.use(getNewsData)


// logout route
app.use(logoutRoute)



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

