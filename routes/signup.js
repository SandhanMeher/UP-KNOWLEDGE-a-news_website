const express=require("express")
const signupRoute=express.Router();
const path=require("path")
const jwt=require("jsonwebtoken")
 


const {userCollection}=require("../model/user");
const {get_signup,post_signup_async}=require("../handlers/signup")

signupRoute.get("/signup",get_signup)

signupRoute.post("/signup",post_signup_async)
module.exports={signupRoute}
