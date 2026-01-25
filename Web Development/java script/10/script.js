const button = document.getElementById("clickButton")
const email = document.getElementById("user-name")
const userName = document.getElementById("username")


button.addEventListener("click" ,() => {
const value = email.value
localStorage.setItem("name", value)
location.reload()
})

window.addEventListener("load" , () => {
    const value = localStorage.getItem("name")
    userName.innerText = value
})