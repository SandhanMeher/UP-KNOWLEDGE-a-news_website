const path=require("path")

const jwt=require("jsonwebtoken")

const {userCollection}=require("../model/user");

function get_signup(req,res){
    res.sendFile(path.join(__dirname,"../views","signup.html"))
}

async function post_signup_async (req,res){
    const {name,email,password,confirmPassword}=req.body;
    if(password==confirmPassword){
        const a= new userCollection({
            name,
            email,
            password
        })
        try{
            const z=await a.save()
            const token=await jwt.sign({
                _id:JSON.stringify(z._id)
            },process.env.signature,{ expiresIn:'1h' })

            res.cookie("token",token).redirect("/")
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
}

module.exports={get_signup,post_signup_async}