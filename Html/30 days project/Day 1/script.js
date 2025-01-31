const apiKey = "5a120c6924d800237d6381d37da49a0f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const Button = document.querySelector(".search button")
const weatherIcon = document.querySelector("weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

     
    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json()

    
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round( data.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind + "km/h"
    
        if(data.weather[0].main == "Clouds")
        {
           weatherIcon.src = "images/cloudy.png"
        }
    
        else if(data.weather[0].main == "CLear")
            {
               weatherIcon.src = "images/sun.png"
            }
    
         else if(data.weather[0].main == "Rain")
            {
               weatherIcon.src = "images/rain.png"
            }
        else if(data.weather[0].main == "drizzle")
            {
               weatherIcon.src = "images/drizzle.png"
            }
        else if(data.weather[0].main == "Snow")
            {
               weatherIcon.src = "images/snow.png"
            }
        
        document.querySelector(".weather").style.display = "block" 
    
    }
     

   

}

Button.addEventListener("click", ()=>
{
    checkWeather(searchBox.value)
})

checkWeather()
