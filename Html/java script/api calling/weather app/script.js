const button = document.getElementById("search botton")
const input = document.getElementById("city input")

const cityNam = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")


async function getData (cityName)
{
const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d14348be51da47b1bb724618242508&q=${cityName}&aqi=yes`)
  return await promise.json()
}

button.addEventListener("click", async () => {
    const value = input.value
    const result = await getData(value)
    cityNam.innerText = `${result.location.name} , ${result.location.region} - $${result.location.country}`
    cityTime.innerText = result.location.localtime
    cityTemp.innerText = result.current.temp_c
})

