const jwt =require("jsonwebtoken")
require("dotenv").config()
const path=require("path")

const {userCollection}=require("../model/user")


function authenticateToken(req,res,next){
    console.log(req.path)
  

    const token=req.cookies.token;
    if(token){
        const z=jwt.verify(token,process.env.signature)
        console.log(z)
        const a=userCollection.find({
            _id:z._id
        })
        // console.log(a)
        if(a){
            console.log("have token")
            next()
        }else{
            console.log("token not matched")
            res.redirect("/auth")
        }

    }else{
        console.log("need to authenticate")
        res.redirect("/auth")
    }
}

module.exports={authenticateToken}