const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");

playPauseBtn.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");

//myVideo.ended does is the function so that if the video is at the end you can hit the play button to replay it again. Its good for looping videos.
function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

//Below is for sound:
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

const playUnmuteImg = document.querySelector("#play-pause-img");

//myVideo.ended does is the function so that if the video is at the end you can hit the play button to replay it again. Its good for looping videos.
function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteBtn.style.backgroundColor = "red";
    //You can have a stylistic choice of the button changing colour once you click it.
    //Below is the code for the icon changing once the user clicks on the button.
    /*playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";*/
  } else {
    myVideo.muted = true;
    muteUnmuteBtn.style.backgroundColor = "green";
    /* playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";*/
  }
}

//Scrubbing time bar.
myVideo.addEventListener("timeupdate", showProgress);
const progressBar = document.querySelector("#progress-bar-fill");
const videoTime = document.querySelector("#video-time");

function showProgress() {
  const currentTime = myVideo.currentTime;
  console.log("current time", currentTime.toFixed(2));
  /*.toFixed(2) tells js how many decimal places to display*/
  videoTime.textContent = currentTime.toFixed(2);

  const progress = (currentTime / myVideo.duration) * 100;
  console.log("progress", progress.toFixed(2));
  progressBar.style.width = progress + "%";
  //"+" can be used in Javascript to add things to string & number variables.
}

//Timestamps:
const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 19.32;
}

const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

const likesBtn = document.querySelector("#like-btn");
likesBtn.addEventListener("click", addLikes);
/*"likesBtn.addEventListener("click", toggleFullScreen);" 
Quite literally call the function name in the eventlistener in the previous example
if you want to full screen it.
*/

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

//Fullscreening Time.
myVideo.addEventListener("dblclick", toggleFullScreen);

function toggleFullScreen() {
  //Is there anything video fullscreen? If there is nothing fullscreen, fullscreen the video.
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//Changing the source of a video to another video.
const videos = [
  {
    name: "zenscape",
    src: "zenscape.mp4",
  },
  {
    name: "stardust",
    src: "stardust.mp4",
  },
];

const firstVideoBtn = document.querySelector("#first-video-btn");
console.log(firstVideoBtn);

const secondVideoBtn = document.querySelector("#second-video-btn");
console.log(secondVideoBtn);

firstVideoBtn.addEventListener("click", function () {
  chooseVideo(0); //0 ==> is the first video
});

secondVideoBtn.addEventListener("click", function () {
  chooseVideo(1); //0 ==> is the second video
});

const videoName = document.querySelector("#video-name");

function chooseVideo(no) {
  myVideo.src = videos[no].src;
  videoName.textContent = videos[no].name;
  console.log(myVideo.src);
  //Must load it first, then it will play. VERY IMPORTANT LANCHU.
  myVideo.load();
  myVideo.play();
}
