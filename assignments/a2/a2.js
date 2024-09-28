const myAudio = document.querySelector("#Audio-Track");
const playPauseBtn = document.querySelector("#play-pause-btn");
playPauseBtn.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
muteUnmuteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

const volumeDecreaseBtn = document.querySelector("#decrease-volume-btn");
volumeDecreaseBtn.addEventListener("click", decreaseVolume);

const volumeIncreaseBtn = document.querySelector("#increase-volume-btn");
volumeIncreaseBtn.addEventListener("click", increaseVolume);

const Plus15SecsBtn = document.querySelector("#Plus15SecsBtn");
Plus15SecsBtn.addEventListener("click", forwards15Secs);

const Minus15SecsBtn = document.querySelector("#Minus15SecsBtn");
Minus15SecsBtn.addEventListener("click", backwards15Secs);

const currentTime = myAudio.currentTime;

myAudio.addEventListener("timeupdate", showProgress);
const progressBar = document.querySelector("#progress-bar-fill");
const AudioTime = document.querySelector("#song-time");

const audioName = document.querySelector("#track-name");
const firstAudioBtn = document.querySelector("#FirstAudioBtn");
const secondAudioBtn = document.querySelector("#SecondAudioBtn");
const thirdAudioBtn = document.querySelector("#ThirdAudioBtn");
const fourthAudioBtn = document.querySelector("#FourthAudioBtn");
const MainCoverImg = document.querySelector("#CurrentSongImg");

firstAudioBtn.addEventListener("click", function () {
  chooseAudio(0);
});

secondAudioBtn.addEventListener("click", function () {
  chooseAudio(1);
});

thirdAudioBtn.addEventListener("click", function () {
  chooseAudio(2);
});

fourthAudioBtn.addEventListener("click", function () {
  chooseAudio(3);
});

const audios = [
  {
    name: "City Lights Chill",
    src: "/assignments/a2/audio/687006__seth_makes_sounds__cinematic-lofi-beat.wav",
    MainCoverImg = "/assignments/a2/images/lofi-city.jpg";
  },
  {
    name: "Lo-Fi Loop",
    src: "/assignments/a2/audio/666722__seth_makes_sounds__compressed-lofi-loop.wav",
    MainCoverImg = "/assignments/a2/images/lofi-loop.jpg";
  },
  {
    name: "Lofi Drizzle",
    src: "/assignments/a2/audio/530585__tictac9__lo-fi-hiphop-rainy-day-tictac9.wav",
    MainCoverImg = "/assignments/a2/images/lofi_drizzle.jpg";
  },
  {
    name: "Jangly Keys",
    src: "/assignments/a2/audio/688675__zhr__chill-lofi-piano-music.wav",
    MainCoverImg = "/assignments/a2/images/lofi-Jangly Keys.jpg";
  },
];

function togglePlay() {
  /*If the song is in the paused() default state or the song has ended*/
  if (myAudio.paused || myAudio.ended) {
    /*Play the song & change the default "play" icon state to "pause" icon state.*/
    myAudio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    /*If not paused the song & change the "pause" icon state to default "play" icon state. */
    myAudio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function toggleAudio() {
  if (myAudio.muted) {
    myAudio.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
    /*muteUnmuteBtn.style.backgroundColor = "red";*/
  } else {
    myAudio.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    /*muteUnmuteBtn.style.backgroundColor = "green";*/
  }
}

function decreaseVolume() {
  myAudio.volume = myAudio.volume - 0.1;
}

function increaseVolume() {
  myAudio.volume = myAudio.volume + 0.1;
}

function forwards15Secs() {
  myAudio.currentTime = myAudio.currentTime + 15;
  /* We want js to check the current time of song. And then add +15 seconds in terms of duration
   to the current time of song.*/
}

function backwards15Secs() {
  myAudio.currentTime = myAudio.currentTime - 15;
}

function showProgress() {
  const currentTime = myAudio.currentTime;
  console.log("current time", currentTime.toFixed(2));
  AudioTime.textContent = currentTime.toFixed(2);

  const progress = (currentTime / myAudio.duration) * 100;
  console.log("progress", progress.toFixed(2));
  progressBar.style.width = progress + "%";
}

function chooseAudio(no) {
  myAudio.src = audios[no].src;
  audioName.textContent = audios[no].name;
  //Must load it first, then it will play. VERY IMPORTANT LANCHU.
  myAudio.load();
  myAudio.play();
}
