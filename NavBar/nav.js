
// Mobile Nav Script
const hamburger = document.querySelector("#hamburger")
const cross = document.querySelector("#cross")
const mobileNavlinks = document.querySelector("#mobileNavlinks")

hamburger.addEventListener("click", () => {
    mobileNavlinks.classList.toggle('hidden')
    cross.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
})

cross.addEventListener("click", () => {
    mobileNavlinks.classList.toggle('hidden')
    cross.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
})

// Dark/Light Mode Toggle
const page = document.querySelector('html')
const sun = document.querySelector("#sun")
const moon = document.querySelector("#moon")
const mobileSun = document.querySelector("#mobileSun")
const mobileMoon = document.querySelector("#mobileMoon")

sun.addEventListener("click", () => {
    page.classList.toggle("dark")
    sun.classList.toggle("hidden")
    moon.classList.toggle("hidden")
})

moon.addEventListener("click", () => {
    page.classList.toggle("dark")
    moon.classList.toggle('hidden')
    sun.classList.toggle('hidden')
})

mobileSun.addEventListener("click", () => {
    page.classList.toggle("dark")
    mobileSun.classList.toggle("hidden")
    mobileMoon.classList.toggle("hidden")
})

mobileMoon.addEventListener("click", () => {
    page.classList.toggle("dark")
    mobileMoon.classList.toggle('hidden')
    mobileSun.classList.toggle('hidden')
})