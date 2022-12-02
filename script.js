
const backgroundImage = document.querySelector(".background-picture")
const topBarBackground = document.querySelector(".top-bar-background")
const topBarRight = document.querySelector(".langauge-change-and-search")
const umName = document.querySelector(".UM-name")
const umLogo = document.querySelector(".UM-logo")
const navbar = document.querySelector(".navbar")


const animationStartingPoint = 130
//boolean value to prevent appearing animation to start when entering the page
let firstTime = true 

document.addEventListener("scroll", ()=>{
    //getting top coordinate of the screen when scrolling
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > animationStartingPoint){
        backgroundImage.classList.remove("background-picture-animation-reverse")
        backgroundImage.classList.add("background-picture-animation")

        topBarBackground.classList.remove("top-bar-dissapearing-animation-reverse")
        topBarBackground.classList.add("top-bar-dissapearing-animation")

        topBarRight.classList.remove("appearing-animation")
        topBarRight.classList.add("dissapearing-animation")

        umName.classList.remove("um-text-appearing-animation")
        umName.classList.add("um-text-dissapearing-animation")

        umLogo.classList.remove("um-logo-appearing-animation")
        umLogo.classList.add("um-logo-dissapearing-animation")

        navbar.classList.remove("navbar-animation-reverse")
        navbar.classList.add("navbar-animation")


        firstTime = false
    } else{
        if(!firstTime){
            backgroundImage.classList.remove("background-picture-animation")
            backgroundImage.classList.add("background-picture-animation-reverse")
            
            topBarBackground.classList.remove("top-bar-dissapearing-animation")
            topBarBackground.classList.add("top-bar-dissapearing-animation-reverse")
            
            topBarRight.classList.remove("dissapearing-animation")
            topBarRight.classList.add("appearing-animation") 

            umName.classList.remove("um-text-dissapearing-animation")
            umName.classList.add("um-text-appearing-animation")

            umLogo.classList.remove("um-logo-dissapearing-animation")
            umLogo.classList.add("um-logo-appearing-animation")

            navbar.classList.add("navbar-animation-reverse")
            navbar.classList.remove("navbar-animation")
            

        }
    }

})
