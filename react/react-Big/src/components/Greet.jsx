import React from 'react'

const Greet = ({timeOfDay}) => {
 if (timeOfDay == "morning") {
    return <h1>good morning</h1>
 }
 else if (timeOfDay=="afternoon") {
    return <h1>Good Afternoon</h1>
 }
}

export default Greet