const express=require("express")
const signupRoute=express.Router();
const path=require("path")
const jwt=require("jsonwebtoken")
 


const {userCollection}=require("../model/user");


signupRoute.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views","signup.html"))
})

signupRoute.post("/signup",async (req,res)=>{
    const {name,email,password,confirmPassword}=req.body;
    console.log(req.body)
    if(password==confirmPassword){
        const a= new userCollection({
            name,
            email,
            password
        })
        try{
            const z=await a.save()
            // console.log(z,typeof(z),typeof(JSON.stringify(z._id)))
            const token=await jwt.sign({
                _id:JSON.stringify(z._id)
            },process.env.signature,{ expiresIn:'1h' })
            console.log(token)
            console.log(JSON.stringify(token))

            res.cookie("token",token).send("created ..........")
        }catch(er){
            console.log(er)
            if(er.code==11000){  
            res.send("duplicate email")
            }   
            res.send("error")
        }
    }else{
        res.redirect("/signup")
    }
})
module.exports={signupRoute}