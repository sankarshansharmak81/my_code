const button = document.getElementById('stop-button')
const button2 =document.getElementById('start-button')


function showTime()
{
    const currenTime = new Date()
    const time = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`
    document.getElementById('time').innerText = time
    
}
 

 
// setTimeout(() => console.log('hi'),5000)
let interval = setInterval(showTime , 1000)

button.addEventListener('click', () => {
    clearInterval(interval)
})
button2.addEventListener('click' , () => {
  interval = setInterval(showTime , 1000)
})