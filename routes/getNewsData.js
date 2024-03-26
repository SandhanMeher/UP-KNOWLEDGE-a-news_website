const express=require("express")
const getNewsData=express.Router();

require("dotenv").config()

const {getNewsDataasync}=require("../handlers/getNewsData")

getNewsData.get("/news",getNewsDataasync)

module.exports={getNewsData}