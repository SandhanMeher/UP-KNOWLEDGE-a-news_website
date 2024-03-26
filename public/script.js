async function getNewsDataFromServer() {
  await fetch("http://localhost:3000/news")
    .then((response) => {
      return response.json();
    })
    .then((datas) => {
      datas.articles.forEach((a) => {
        
        const cardsPlace = document.getElementById("cardsPlace");

        const div1 = document.createElement("div");
        div1.classList.add(
          "bg-slate-500" ,"bg-opacity-70" ,"hover:bg-opacity-90", "p-2", "rounded-xl", "transition", "duration-1000", "ease-in-out" ,"transform" ,"hover:scale-105"
        );

        const div2 = document.createElement("div");
        div2.classList.add(
          "flex" ,"justify-around" ,"gap-6" ,"bg-slate-300", "items-center" ,"px-2", "rounded-md" ,"py-3", "bg-opacity-90" ,"hover:bg-opacity-95"
        );


        const div4 = document.createElement("div");
        div4.classList.add("max-w-60");

        const div5 = document.createElement("div");
        div5.classList.add("rounded-lg");

        const div6 = document.createElement("div");
        div6.classList.add(
          "h-16" ,"bg-opacity-70", "hover:bg-opacity-90" ,"flex" ,"justify-around", "mt-2" ,"bg-slate-200", "w-11/12" ,"mx-auto" ,"rounded-2xl", "items-center" ,"mb-6"
        );

        const div7 = document.createElement("div");
        div7.classList.add("flex", "justify-center");

        //  ad4
        const h1=document.createElement("h2")
        h1.classList.add("font-bold");
        h1.innerHTML=a.title.substring(0,30) + "..";
        const p1=document.createElement("p");
        p1.innerHTML=a.description.substring(0,125) +"...";
        div4.appendChild(h1);
        div4.appendChild(p1)
        // 
                              
        // ad2
        const img =document.createElement("img")
        img.src=a.urlToImage;

        img.classList.add("h-32", "w-32","bg-cover","rounded-md")

        div2.appendChild(img);
        div2.appendChild(div4);

        // ad6
        const a1=document.createElement("a")
        const m1=document.createElement("img")
        m1.src="./img/likee.png";
        m1.classList.add("h-10" ,"w-10", "transition" ,"duration-100" ,"ease-in-out" ,"transform", "hover:scale-110")
        m1.alt="likee"
        a1.appendChild(m1)

        const a2=document.createElement("a")
        const m2=document.createElement("img")
        m2.src="./img/dislikeee.png";
        m2.classList.add("h-10" ,"w-10", "transition" ,"duration-100" ,"ease-in-out" ,"transform", "hover:scale-110")
        m2.alt="dislikeee"
        a2.appendChild(m2)

        const a3=document.createElement("a")
        const m3=document.createElement("img")
        m3.src="./img/chat.png";
        m3.classList.add("h-10" ,"w-10", "transition" ,"duration-100" ,"ease-in-out" ,"transform", "hover:scale-110")
        m3.alt="comment"
        a3.appendChild(m3)

        const a4=document.createElement("a")
        const m4=document.createElement("img")
        m4.src="./img/bookmark (1).png";
        m4.classList.add("h-10" ,"w-10", "transition" ,"duration-100" ,"ease-in-out" ,"transform", "hover:scale-110")
        m4.alt="bookmark"
        a4.appendChild(m4)

        div6.appendChild(a1)
        div6.appendChild(a2)
        div6.appendChild(a3)
        div6.appendChild(a4)

        const a5=document.createElement("a")
        a5.classList.add("bg-black" ,"text-white" ,"px-7", "py-2" ,"rounded-2xl", "outline" ,"outline-offset-0", "outline-cyan-100" ,"hover:bg-white", "mb-3", "hover:outline-cyan-950" ,"hover:text-black", "hover:font-bold")
        a5.innerHTML="Link &#8594;";
        a5.href=a.url;
        a5.target="_blank"

        div7.appendChild(a5)

        div5.appendChild(div6)
        div5.appendChild(div7)

        div1.appendChild(div2)
        div1.appendChild(div5)

        cardsPlace.appendChild(div1)



        console.log(a);


      });
    });
}
getNewsDataFromServer();
