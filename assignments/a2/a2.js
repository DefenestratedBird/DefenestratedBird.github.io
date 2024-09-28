const myAudio = document.querySelector("#Audio-Track");
const playPauseBtn = document.querySelector("#play-pause-btn");
playPauseBtn.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

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
