const express=require("express")
const logoutRoute=express.Router();

const {logout}=require("../handlers/logout")

logoutRoute.get("/logout",logout)

module.exports={logoutRoute}