let countdown // Declare the variable for the countdown timer
const button = document.getElementById('start')
const button2 = document.getElementById('stop')
const timer = document.getElementById('timer')

function startTime() {
    // Get the input value when the button is clicked
    const input = document.getElementById('time').value
    const [hours, min, sec] = input.split(':').map(Number)

    // Validate input
    if (isNaN(hours) || isNaN(min) || isNaN(sec) || hours < 0 || min < 0 || sec < 0) {
        timer.innerText = "Invalid time format!"
        return
    }

    // Calculate total time in seconds
    const totalTime = (hours * 3600) + (min * 60) + sec

    // Clear any existing timer
    clearInterval(countdown)

    let remainingSec = totalTime

    countdown = setInterval(() => {
        const hrs = Math.floor(remainingSec / 3600)
        const mins = Math.floor((remainingSec % 3600) / 60)
        const secs = remainingSec % 60

        // Update the timer display
        timer.innerText = `  ${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}` 

        // Decrease remaining time
        remainingSec--

        // Stop the timer when time runs out
        if (remainingSec < 0) {
            clearInterval(countdown)
            timer.innerText = "Time is up!"
        }
    }, 1000) // 1000 milliseconds = 1 second
}

function stopCount() {
    clearInterval(countdown)
    timer.innerText = "Countdown Stopped"
}

// Add event listeners for the buttons
button.addEventListener("click", startTime) // Add the function as a callback
button2.addEventListener("click", stopCount)