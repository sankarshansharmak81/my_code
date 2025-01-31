const colourContanier = document.getElementById("color-code")
const optionContanier = document.getElementById("option-cont")
const scoreCont = document.getElementById("score")
const highScore = document.getElementById('High-score')
let randomColor = null
let score = 0;
let High = Number(window.localStorage.getItem("High-score")) || 0
function gnerateRandom(min , max)
{
   return min + Math.floor(Math.random() *(max-min+1))
}

function incrementScore()
{
    score += 1
    if (score > highScore)
    {
        High = score
        window.localStorage.setItem("High-score",High)
    }
   scoreCont.innerText =score
   highScore.innerText = High
}
function generateColour()
{
    const red = gnerateRandom(0,255)
    const green = gnerateRandom(0,255)
    const blue = gnerateRandom(0,255)
    return `rgb(${red}, ${green}, ${blue})`
}

function validateRes(el)
{
    const target = randomColor
const selector = el.target.style.backgroundColor


if (target === selector) {
    incrementScore();
   
}
else {
    score = 0
}
window.localStorage.setItem('score',score)

startGame(); // Restart the game if the correct color is clicked
}
function startGame ()

{
    score = Number(window.localStorage.getItem('score')) ?? 0
    scoreCont.innerText = score
    highScore.innerText = High
    
    optionContanier.innerText = null
    randomColor = generateColour()
    colourContanier.innerText = randomColor

    const ans = gnerateRandom(0,5)

    
    for( let i = 0; i < 6; i++)
    {
     const div = document.createElement('div')
    div.addEventListener("click", validateRes)
     div.style.backgroundColor= i == ans ? randomColor : generateColour()
     optionContanier.append(div)
    }
}

window.addEventListener('load', () => startGame() )