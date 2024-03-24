const express=require('express')
const signinRoute=express.Router()
const path=require("path")
const jwt=require("jsonwebtoken")


require("dotenv").config();
const { userCollection }=require("../model/user")

signinRoute.get("/signin",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views","signin.html"))
})

signinRoute.post("/signin",async (req,res)=>{
    const {password,email}=req.body;
    console.log(req.body)
    const a=await userCollection.find({
        password,
        email
    })
    console.log(a,"     ",a[0]._id)
    if(a[0]._id){
        token=await jwt.sign({_id:a._id},process.env.signature,{expiresIn:"1h"});
        res.cookie("token",token).redirect("/")
    }else{
        res.redirect("/auth")
    }

})

module.exports={signinRoute}

