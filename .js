

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


//  song list 
const songs = [
  {
    id: 0,
    name: "APT.",
    audioSrc: "audio/apt.mp3",
    imgSrc: "media/apt.png"
  },
  {
    id: 1,
    name: "Die With The Smile",
    audioSrc: "audio/die-with-the-smile.mp3",
    imgSrc: "media/die-with-the-smile.png"
  },
  {
    id: 2,
    name: "Unstopable",
    audioSrc: "audio/unstopable.mp3",
    imgSrc: "media/unstopable.png"
  },
  {
    id: 3,
    name: "Me And The Devil",
    audioSrc: "audio/me-and-the-devil.mp3",
    imgSrc: "media/me-and-the-devil.png"
  },
  {
    id: 4,
    name: "Jaana Samjho Na",
    audioSrc: "audio/jaana-samjho-na.mp3",
    imgSrc: "media/jaana-samjho-na.png"
  },
  {
    id: 5,
    name: "Ahista Ahista",
    audioSrc: "audio/ahista-ahista.mp3",
    imgSrc: "media/ahista-ahista.png"
  },
  {
    id: 6,
    name: "Uyi Amma",
    audioSrc: "audio/uyi-amma.mp3",
    imgSrc: "media/uyi-amma.png"
  },
  {
    id: 7,
    name: "Tu Hai kahan",
    audioSrc: "audio/tu-hai-kahan.mp3",
    imgSrc: "media/tu-hai-kahan.png"
  },
  {
    id: 8,
    name: "Skyfall",
    audioSrc: "audio/skyfall.mp3",
    imgSrc: "media/skyfall.png"
  },
  {
    id: 9,
    name: "Takki Takki",
    audioSrc: "audio/takki-takki.mp3",
    imgSrc: "media/takki-takki.png"
  },
  {
    id: 10,
    name: "Big Dawgs",
    audioSrc: "audio/big-dawgs.mp3",
    imgSrc: "media/big-dawgs.png"
  },
  {
    id: 11,
    name: "Espresso",
    audioSrc: "audio/espresso.mp3",
    imgSrc: "media/espresso.png"
  },
  {
    id: 12,
    name: "PASSO BEM SOLTO - Slowed - ATLXS",
    audioSrc: "audio/PASSO BEM SOLTO - Slowed - ATLXS.mp3",
    imgSrc: "media/PASSO BEM SOLTO - Slowed - ATLXS.png"
  },
  {
    id: 13,
    name: "MASHA ULTRAFUNK - HISTED",
    audioSrc: "audio/MASHA ULTRAFUNK - HISTED.mp3",
    imgSrc: "media/MASHA ULTRAFUNK - HISTED.png"
  },
  {
    id: 14,
    name: "FUNK DO BOUNCE (Slowed) - Ariis",
    audioSrc: "audio/FUNK DO BOUNCE (Slowed) - Ariis.mp3",
    imgSrc: "media/Funk de Beleza - Slowed - Nateki.png"
  },
  {
    id: 15,
    name: "BRODYAGA FUNK - Eternxlkz",
    audioSrc: "audio/BRODYAGA FUNK - Eternxlkz.mp3",
    imgSrc: "media/BRODYAGA FUNK - Eternxlkz.png"
  }
];


const searchinput = document.getElementById("search-input");
const searchResults = document.getElementById("searchResults");

searchinput.addEventListener("input", () => {
  const query = searchinput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query.trim() === "") return;

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(query)
  );

  filteredSongs.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song.name;
    li.addEventListener("click", () => {
      searchinput.value = ""; 
      searchResults.innerHTML = ""; 
      toggleSong(song.id, song.imgSrc, song.name, song.audioSrc); 
    });
    searchResults.appendChild(li);
  });
});
