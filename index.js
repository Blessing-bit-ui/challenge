function changeColor(){
    let everyArticle=document.querySelectorAll(".article")
    everyArticle.forEach(article=>{
        article.classList.toggle("colors")
});
    }

let colorButton=document.querySelector("#darkTheme");
colorButton.addEventListener( "click",changeColor)