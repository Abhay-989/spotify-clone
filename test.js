
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('.searchbtn');
const allAudio = document.querySelectorAll('#all-audio audio'); // Get all audio tags

searchBtn.addEventListener("click", function () {
  const userInput = searchInput.value.trim().toLowerCase();
  let found = false;

  // Pause all before starting new one
  allAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  allAudio.forEach(audio => {
    const src = audio.src.toLowerCase();
  const filename = src.substring(src.lastIndexOf('/') + 1).replace('.mp3', '');
    if (filename.includes(userInput)) {
      audio.play();
      found = true;
    }
  });

  if (!found) {
    alert("No song found");
  }
});


console.log(filename+'.png');