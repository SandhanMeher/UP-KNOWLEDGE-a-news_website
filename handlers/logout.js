function logout(req,res){
    res.clearCookie('token').send("logout")
}

module.exports={logout}