const button = document.getElementById('get-location')


async function getData (lat ,long)
{
const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d14348be51da47b1bb724618242508&q=${lat}, $${long}&aqi=yes`)
  return await promise.json()
}


async function getlocation(position)
{
   const result = await getData (
    position.coords.latitude , position.coords.longitude
   )
   console.log(result)
}

function failed ()
{
    console.log('there was an error')
}

button.addEventListener('click' , () => {
    navigator.geolocation.getCurrentPosition(getlocation , failed)
})