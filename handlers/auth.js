const path=require("path")

function auth (req,res){
    res.sendFile(path.join(__dirname,"../views","auth.html"))
}

module.exports={auth}