async function getNews(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=402160243c0f405680c5eb2f5f9d8952"
    const response = await fetch(url)
let data = await response.json()
  let articles= data.articles
  console.log("hiii")
  return articles;  // return promise?
}
// getNews()

async function displayNews() {
let articles = await getNews(); 
// - select row 
let row = document.querySelector(".row")
let defaultImg = "https://img.freepik.com/premium-vector/flat-design-news-concept-illustration_23-2148268773.jpg"
let defaultTxt = "Invalid Content!"

// for(let i = 0 ; i < articles.length; i++){
articles.forEach(article => {
    //card
let card = document.createElement("div")
card.classList.add("card", "mx-5", "my-5", ".bg-body-tertiary","col-3","d-flex","justify-content-center") 
row.appendChild(card)

// img 
let imgDiv = document.createElement("div")
imgDiv.classList.add("img", "rounded-2" )

card.appendChild(imgDiv)
let image = document.createElement("img")
image.classList.add("rounded-2","mb-4")
image.src = `${article.urlToImage ? article.urlToImage : defaultImg}`
imgDiv.appendChild(image)
image.setAttribute("style","width: 16rem")

//title 
let title = document.createElement("h5")
title.classList.add("title")
card.appendChild(title)
title.innerText = `${article.title}`

// content 
let content = document.createElement("p")
content.classList.add("content")
card.appendChild(content)
content.innerText = `${article.description ? article.description : defaultTxt}`

//author 
let auther = document.createElement("h6")
auther.classList.add("auther")
card.appendChild(auther)
auther.innerText = `Author : ${article.author ? article.author : defaultTxt}`

// published at :
let date = document.createElement("p")
date.classList.add("date")
card.appendChild(date)
date.innerText = `Published at : ${article.publishedAt? article.publishedAt : defaultTxt}`


// btns 
let btns = document.createElement("div")
btns.classList.add("btns", "d-flex", "justify-content-between","my-2")
card.appendChild(btns)

let srcBtn = document.createElement("button")
srcBtn.classList.add("srcBtn","btn","btn-dark")
btns.appendChild(srcBtn)
srcBtn.innerText = "Source"
srcBtn.addEventListener("click", ()=>{alert(article.source.name)})

let detialsBtn = document.createElement("button")
detialsBtn.classList.add("detialsBtn","btn","btn-dark")
btns.appendChild(detialsBtn)
detialsBtn.innerText = "Details"
detialsBtn.addEventListener("click", ()=>{window.open(article.url)})
});
}
displayNews()

async function sourceClicked(){
    // let articles = await getNews(); 

}