function logout(req,res){
    res.clearCookie('token').redirect("/auth")
}

module.exports={logout}