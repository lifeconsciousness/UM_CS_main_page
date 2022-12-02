
const backgroundImage = document.querySelector(".background-picture");
const animationStartingPoint = 130;

document.addEventListener("scroll", ()=>{
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > animationStartingPoint){
        backgroundImage.classList.add("background-picture-animation")
    } else if (scrollTop < animationStartingPoint){
        
    }
})
