let hamburger = document.getElementById("hamburger")
let menu = document.getElementById("menu")
let firstLine = document.getElementById("firstLine")
let midLine = document.getElementById("midLine")
let lastLine = document.getElementById("lastLine")

let searchPanel = document.getElementById("searchPanel")

let loginBox = document.getElementById("loginBox")


function toggleMenu () {

    if (hamburger.classList.contains("start")) {

       hamburger.classList.remove("start")
       hamburger.classList.add("end")
       firstLine.classList.add("rotate-left")
       midLine.classList.add("hidden")
       lastLine.classList.add("rotate-right")

       menu.classList.remove("menu--close")
       menu.classList.add("menu--open")
       

        
    }

    else if (hamburger.classList.contains("end")) {
        hamburger.classList.add("start")
        hamburger.classList.remove("end")
        firstLine.classList.remove("rotate-left")
        midLine.classList.remove("hidden")
        lastLine.classList.remove("rotate-right")

        menu.classList.remove("menu--open")
        menu.classList.add("menu--close")
        
    }

}

function searchClose () {

    searchPanel.style.display = "none"

}

function searchOpen () {

    searchPanel.style.display = "flex"

}

function loginBoxOpen () {
    
    loginBox.style.display = "flex"

}

function loginBoxClose () {
        loginBox.style.display = "none"
}