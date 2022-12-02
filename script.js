
const backgroundImage = document.querySelector(".background-picture");
const animationStartingPoint = 130;
let firstTime = true

document.addEventListener("scroll", ()=>{
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > animationStartingPoint){
        backgroundImage.classList.remove("background-picture-animation-reverse")
        backgroundImage.classList.add("background-picture-animation")
        firstTime = false
    } else{
        if(!firstTime){
            backgroundImage.classList.remove("background-picture-animation")
            backgroundImage.classList.add("background-picture-animation-reverse")
            
        }
    }

})
