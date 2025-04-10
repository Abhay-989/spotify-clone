
// let currentAudio = null;
// let currentIndex = -1;

// function toggleSong(index,imgSrc,imgName,audioSrc) {
//   const newAudio = document.getElementById('audio' + index);
//   const nowPlayingImg = document.getElementById('nowPlayingImg');
//   const leftsongname = document.querySelector('.left-song-name');
//   const audio = document.getElementById('audio');
//   const footerPlayerImg = document.getElementById('footerPlayerImg');
//   const footerImgName = document.querySelector('.footerImgName');
//   if (currentAudio && currentIndex === index) {
//     // If same song, toggle pause/play
//     if (!currentAudio.paused) {
//       currentAudio.pause();
//     } else {
//       currentAudio.play();
//       if (leftsongname) leftsongname.innerText = imgName;
//       if (footerImgName) footerImgName.innerText = imgName;
//       audio.src = audioSrc;
//     }
//   } else {
//     // Pause the previous song
//     if (currentAudio) {
//       currentAudio.pause();
//       currentAudio.currentTime = 0;
//     }

//     // Play the new song
//     newAudio.play();
//     currentAudio = newAudio;
//     currentIndex = index;

//        // Show image
//        nowPlayingImg.src = imgSrc;
//        footerPlayerImg.src = imgSrc;
//        audio.src = audioSrc;
//        if (leftsongname) leftsongname.innerText = imgName;
//        if (footerImgName) footerImgName.innerText = imgName;
//        nowPlayingImg.style.display = 'block';
//   }
// }

// const audio = document.getElementById('audio');
// const playPauseBtn = document.getElementById('playPauseBtn');
// const progressBar = document.getElementById('progressBar');
// const volumeBar = document.getElementById('volumeBar');
// const currentTimeText = document.getElementById('currentTime');
// const durationText = document.getElementById('duration');

// let isPlaying = false;

// playPauseBtn.addEventListener('click', () => {
//   if (isPlaying) {
//     audio.pause();
//     playPauseBtn.innerHTML = <i class="fa-solid fa-play"></i>;
//   } else {
//     audio.play();
//     playPauseBtn.innerHTML = <i class="fa-solid fa-pause"></i>;
//   }
// });

// audio.addEventListener('play', () => {
//   isPlaying = true;
// });

// audio.addEventListener('pause', () => {
//   isPlaying = false;
// });

// audio.addEventListener('loadedmetadata', () => {
//   progressBar.max = audio.duration;
//   durationText.textContent = formatTime(audio.duration);
// });

// audio.addEventListener('timeupdate', () => {
//   progressBar.value = audio.currentTime;
//   currentTimeText.textContent = formatTime(audio.currentTime);
// });

// progressBar.addEventListener('input', () => {
//   audio.currentTime = progressBar.value;
// });

// volumeBar.addEventListener('input', () => {
//   audio.volume = volumeBar.value;
// });

// function formatTime(seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
//   return `${mins}:${secs}`;
// }


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
const allAudio = document.querySelectorAll('#all-audio audio'); // Get all audio tags

// searchBtn.addEventListener("click", function () {
//   const userInput = searchInput.value.trim().toLowerCase();
//   let found = false;

//   // Pause all before starting new one
//   allAudio.forEach(audio => {
//     audio.pause();
//     audio.currentTime = 0;
//   });

//   allAudio.forEach(audio => {
//     const src = audio.src.toLowerCase();
//   const filename = src.substring(src.lastIndexOf('/') + 1).replace('.mp3', '');
//     if (filename.includes(userInput)) {
//       audio.play();
//       found = true;
//     }
//   });

//   if (!found) {
//     alert("No song found");
//   }
// });
searchBtn.addEventListener("click", function () {
  const userInput = searchInput.value.trim().toLowerCase();
  let found = false;

  allAudio.forEach((audio, index) => {
    const src = audio.src.toLowerCase();
    const filename = src.substring(src.lastIndexOf('/') + 1).replace('.mp3', '');

    if (filename.includes(userInput)) {
      const mainAudio = document.getElementById('audio');
      const nowPlayingImg = document.getElementById('nowPlayingImg');
      const footerPlayerImg = document.getElementById('footerPlayerImg');
      const footerImgName = document.querySelector('.footerImgName');
      const leftsongname = document.querySelector('.left-song-name');
      const playPauseBtn = document.getElementById('playPauseBtn');

      const imgSrc = filename.png;
      const imgName= filename;

      // Set main player source
      mainAudio.src = audio.src;
      mainAudio.play();
      currentIndex = index;

      // Update UI
      nowPlayingImg.src = imgSrc;
      nowPlayingImg.style.display = 'block';
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

