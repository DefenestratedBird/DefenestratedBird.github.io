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
