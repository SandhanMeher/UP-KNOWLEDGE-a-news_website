require("dotenv").config();

const path=require("path")
const jwt=require("jsonwebtoken")

const { userCollection }=require("../model/user")

function get_signin(req,res){
    res.sendFile(path.join(__dirname,"../views","signin.html"))
}

async function post_signin (req,res){
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

}

module.exports={get_signin,post_signin}
