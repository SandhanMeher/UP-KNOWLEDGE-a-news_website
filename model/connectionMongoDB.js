const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1/users_UP_KNOWLEDGE').then(()=>{
    console.log("mongodb connected ")})
