const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,     
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:String,
        default:Date.now()
    }
})

const userCollection=new mongoose.model("users",userSchema);
module.exports={userCollection}