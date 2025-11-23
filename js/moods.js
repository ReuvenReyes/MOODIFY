
function selectMood(mood) {
  localStorage.setItem('selectedMood', mood);
  window.location.href = 'experience.html';
}


document.addEventListener('DOMContentLoaded', () => {
  const body = document.getElementById('experienceBody');
  const title = document.getElementById('moodTitle');
  const quoteText = document.getElementById('quoteText');
  const audioPlayer = document.getElementById('audioPlayer');
  const songTitle = document.getElementById('songTitle');
  const colorBtn = document.getElementById('changeColorBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  const mood = localStorage.getItem('selectedMood');
  if (!mood) return;


  const data = {
    happy: {
      color: 'linear-gradient(120deg, #f6d365, #fda085)',
      quote: "Happiness is a direction, not a place.",
      songs: ['music/happy1.mp3', 'music/happy2.mp3']
    },
    sad: {
      color: 'linear-gradient(120deg, #a1c4fd, #c2e9fb)',
      quote: "Tears come from the heart, not the brain.",
      songs: ['music/sad1.mp3', 'music/sad2.mp3']
    },
    calm: {
      color: 'linear-gradient(120deg, #96fbc4, #f9f586)',
      quote: "Peace comes from within.",
      songs: ['music/calm1.mp3', 'music/calm2.mp3']
    },
    energetic: {
      color: 'linear-gradient(120deg, #f093fb, #f5576c)',
      quote: "Energy flows where attention goes.",
      songs: ['music/energetic1.mp3', 'music/energetic2.mp3']
    },
    focused: {
      color: 'linear-gradient(120deg, #43e97b, #38f9d7)',
      quote: "Stay focused and never give up.",
      songs: ['music/focused1.mp3', 'music/focused2.mp3']
    },
  };

  const selected = data[mood];
  let currentIndex = 0;

  // Apply mood theme
  body.style.background = selected.color;
  title.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
  quoteText.textContent = selected.quote;

  // Initialize song
  audioPlayer.src = selected.songs[currentIndex];
  songTitle.textContent = selected.songs[currentIndex].split('/')[1];

  // Play / Pause
  playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = '⏸ Pause';
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = '➤ Play';
    }
  });

  // ⏭ Next Song
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % selected.songs.length;
    audioPlayer.src = selected.songs[currentIndex];
    songTitle.textContent = selected.songs[currentIndex].split('/')[1];
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ Pause';
  });

  // ⏮ Previous Song
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + selected.songs.length) % selected.songs.length;
    audioPlayer.src = selected.songs[currentIndex];
    songTitle.textContent = selected.songs[currentIndex].split('/')[1];
    audioPlayer.play();
    playPauseBtn.textContent = '⏸ Pause';
  });


  colorBtn.addEventListener('click', () => {
    body.style.background = `linear-gradient(120deg, ${randomColor()}, ${randomColor()})`;
  });
});


function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
