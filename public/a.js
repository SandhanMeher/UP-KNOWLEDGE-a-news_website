async function getNewsDataFromServer(){
    await fetch("http://localhost:3000/news").then((response)=>{
        return response.json()
    }).then((datas)=>{
        datas.articles.forEach((a)=>{
           console.log(a);
           const a1=document.createElement('h1')
           a1.classList.add('text-white hover:text-black')
           a1.innerHTML="aaaaaaaaaaaaaa"
           
           document.getElementById("cardsPlace").appendChild(a1)
           console.log(a)

        })
    })
}
getNewsDataFromServer();
