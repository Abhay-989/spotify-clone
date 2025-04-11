

let currentIndex = -1;

function toggleSong(index, imgSrc, imgName, audioSrc) {
  const audio = document.getElementById('audio');
  const nowPlayingImg = document.getElementById('nowPlayingImg');
  const leftsongname = document.querySelector('.left-song-name');
  const footerPlayerImg = document.getElementById('footerPlayerImg');
  const footerImgName = document.querySelector('.footerImgName');
  const playPauseBtn = document.getElementById('playPauseBtn');
 
  
  if (currentIndex === index && !audio.paused) {
    audio.pause();
  } else {
    if (currentIndex !== index) {
      audio.src = audioSrc;
    }

    audio.play();
    nowPlayingImg.src = imgSrc;
    nowPlayingImg.style.display = 'block';
    footerPlayerImg.src = imgSrc;
    footerImgName.innerText = imgName;
    leftsongname.innerText = imgName;
    currentIndex = index;

    // Change play button to pause icon
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
}

// Audio Controls
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeBar = document.getElementById('volumeBar');
const currentTimeText = document.getElementById('currentTime');
const durationText = document.getElementById('duration');

let isPlaying = false;

// Toggle Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  } else {
    audio.play();
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  }
});

// Update State
audio.addEventListener('play', () => { isPlaying = true; });
audio.addEventListener('pause', () => { 
  isPlaying = false;
  playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
});

// On Metadata Load
audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  durationText.textContent = formatTime(audio.duration);
});

// On Time Update
audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  currentTimeText.textContent = formatTime(audio.currentTime);
});

// Seek Audio
progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});

// Volume Control
volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value;
});

// Format Time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

//search bar
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.searchbtn');
const allAudio = document.querySelectorAll('#all-audio audio'); 
searchBtn.addEventListener("click", function () {
  const userInput = searchInput.value.trim().toLowerCase();
  let found = false;

  allAudio.forEach((audio, index) => {
    const src = audio.src.toLowerCase();
    const filename = src.substring(src.lastIndexOf('/') + 1).replace('.mp3', '');

    const imgSrc = `media/${filename}.png`;
    const imgName= filename;

    if (filename.includes(userInput)) {
      const mainAudio = document.getElementById('audio');
      const nowPlayingImg = document.getElementById('nowPlayingImg');
      const footerPlayerImg = document.getElementById('footerPlayerImg');
      const footerImgName = document.querySelector('.footerImgName');
      const leftsongname = document.querySelector('.left-song-name');
      const playPauseBtn = document.getElementById('playPauseBtn');

     

      // main player source
      mainAudio.src = audio.src;
      mainAudio.play();
      currentIndex = index;

      // Update UI
      nowPlayingImg.src = imgSrc;
    
      footerPlayerImg.src = imgSrc;
      footerImgName.innerText = imgName;
      leftsongname.innerText = imgName;
      playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;

      // Clear search input
      searchInput.value = '';
      found = true;
    }
  });

  if (!found) {
    alert("No song found");
  }
});

