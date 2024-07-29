const chatboxhide = document.querySelector('.chatbox-hide')
const chatimageicon = document.querySelector('.chatimage-icon')
const hideunhide =document.querySelector('.hide-unhide')
const navcontenthide = document.querySelector('.nav-content-hide')
const ham = document.querySelector('.ham')

ham.addEventListener("click", () => {
    navcontenthide.classList.toggle('nav-content-hide')
})

chatimageicon.addEventListener("click", () => {
    chatboxhide.classList.toggle('chatbox-hide')
})


hideunhide.addEventListener("click", () => {
    chatboxhide.classList.toggle('chatbox-hide')
})
