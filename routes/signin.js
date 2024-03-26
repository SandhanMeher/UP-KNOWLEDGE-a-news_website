const express=require('express')
const signinRoute=express.Router()


require("dotenv").config();


const { userCollection }=require("../model/user")
const {get_signin,post_signin}=require("../handlers/signin")


signinRoute.get("/signin",get_signin)

signinRoute.post("/signin",post_signin)

module.exports={signinRoute}

