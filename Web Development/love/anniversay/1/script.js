// Show the music container when the user clicks the "Play Music" button
function showMusicContainer() {
  document.querySelector('.song-recommendation').style.display = 'none'; // Hide the song recommendation section
  document.querySelector('.music-container').style.display = 'block'; // Show the music player
}

// Music play/pause toggle functionality
function toggleMusic() {
  const musicButton = document.querySelector('.music-button');
  const bgMusic = document.getElementById('bgMusic');
  const musicIcon = musicButton.querySelector('i');

  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.classList.remove('fa-play');
    musicIcon.classList.add('fa-pause');
    musicButton.innerHTML = '<i class="fa fa-pause"></i> Pause';
  } else {
    bgMusic.pause();
    musicIcon.classList.remove('fa-pause');
    musicIcon.classList.add('fa-play');
    musicButton.innerHTML = '<i class="fa fa-play"></i> Play';
  }
}

// Show the surprise section when the button is clicked
function showSurprise() {
  document.getElementById('surprise').style.display = 'block';
}
