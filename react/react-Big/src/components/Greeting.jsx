import React from 'react'
const name = "Sankarshan"
const date = new Date()
const Greeting = () => {
  return (
    <div>
        <h1>Hey! , {name}</h1>
         <p> Current Date: {date.getDate()}</p>

    </div>
  )
}

export default Greeting