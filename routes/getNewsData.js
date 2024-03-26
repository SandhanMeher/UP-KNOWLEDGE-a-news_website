const express=require("express")
const getNewsData=express.Router();

require("dotenv").config()

getNewsData.get("/news",async (req,res)=>{
    const topic="ai";
    const totalPages=10;
    const apikey=process.env.apikey;

    await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&language=en&pageSize=${totalPages}&sortBy=publishedAt&apiKey=${apikey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((dat) => {
        res.json(dat)
      });
      console.log("/news route")
  
})

module.exports={getNewsData}