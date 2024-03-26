
require("dotenv").config()
async function getNewsDataasync (req,res){
    const topic=req.query.topic;
    console.log(topic)
    const totalPages=50;
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
  
}

module.exports={getNewsDataasync}