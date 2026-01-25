let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Function to update progress bar
function updateProgress() {
    progress.value = song.currentTime;
}

// Play/Pause Function
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

        // Start updating progress bar
        interval = setInterval(updateProgress, 500);
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

        // Stop updating progress when paused
        clearInterval(interval);
    }
}
song.onloadedmetadata = function () {
    progress.max = Math.floor(song.duration);  // Ensure it's an integer
    progress.value = song.currentTime;
};


// Allow seeking in progress bar
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Ensure play icon updates when song ends
song.onended = function () {
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    clearInterval(interval);
};
