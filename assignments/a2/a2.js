/*Have decided to put all my querySelectors & defined variables at the top of the js script,
because this is the formatting that I am used/have used in C# before.*/

/*Play & Pause buttons querySelectors & eventlisteners:*/
const myAudio = document.querySelector("#Audio-Track");
const playPauseBtn = document.querySelector("#play-pause-btn");
playPauseBtn.addEventListener("click", togglePlay);
const playPauseImg = document.querySelector("#play-pause-img");

/*Mute & Unmute buttons querySelectors & eventlisteners:*/
const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
muteUnmuteButton.addEventListener("click", toggleAudio);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

/*Descrease & Increase buttons querySelectors & eventlisteners:*/
const volumeDecreaseBtn = document.querySelector("#decrease-volume-btn");
volumeDecreaseBtn.addEventListener("click", decreaseVolume);
const volumeIncreaseBtn = document.querySelector("#increase-volume-btn");
volumeIncreaseBtn.addEventListener("click", increaseVolume);

/*Fast forward & Rewind backwards 10 seconds buttons querySelectors & eventlisteners:*/
const Plus10SecsBtn = document.querySelector("#Plus10SecsBtn");
Plus10SecsBtn.addEventListener("click", forwards10Secs);
const Minus10SecsBtn = document.querySelector("#Minus10SecsBtn");
Minus10SecsBtn.addEventListener("click", backwards10Secs);

let isonclick = false;

/*Timeline querySelectors & eventlisteners:*/
myAudio.addEventListener("timeupdate", showProgress);
const progressBar = document.querySelector("#progress-bar-fill");
const AudioTime = document.querySelector("#song-time");

/*Changing Song cover image & name querySelectors & eventlisteners:*/
const audioName = document.querySelector("#track-name");
const firstAudioBtn = document.querySelector("#FirstAudioBtn");
const secondAudioBtn = document.querySelector("#SecondAudioBtn");
const thirdAudioBtn = document.querySelector("#ThirdAudioBtn");
const fourthAudioBtn = document.querySelector("#FourthAudioBtn");
const MainCoverImg = document.querySelector("#CurrentSongImg");

/*Telling Javascript to run the function "chooseAudio('ArrayNo.')" based on the
defined Array variables in "audios":*/
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
    name: "Sunset Serenity",
    src: "/assignments/a2/audio/688285__seth_makes_sounds__tranquil-lofi-beat.wav",
    img: "/assignments/a2/images/lofi-sunset.jpg",
  },
  {
    name: "City Lights Chill",
    src: "/assignments/a2/audio/687006__seth_makes_sounds__cinematic-lofi-beat.wav",
    img: "/assignments/a2/images/lofi-city.jpg",
  },
  {
    name: "Lo-Fi Loop",
    src: "/assignments/a2/audio/666722__seth_makes_sounds__compressed-lofi-loop.wav",
    img: "/assignments/a2/images/lofi-loop.jpg",
  },
  {
    name: "Lofi Drizzle",
    src: "/assignments/a2/audio/530585__tictac9__lo-fi-hiphop-rainy-day-tictac9.wav",
    img: "/assignments/a2/images/lofi_drizzle.jpg",
  },
];

function togglePlay() {
  /*If the song is in the paused() default state or the song has ended*/
  if (myAudio.paused || myAudio.ended) {
    /*Play the song & change the default "play" icon state to "pause" icon state.*/
    myAudio.play();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=61012&format=png&color=260101";
    playPauseBtn.style.backgroundColor = "#5C9EB7";
    playPauseBtn.style.borderColor = "#260101";
    playPauseBtn.style.transform = "scale(0.9)";
  } else {
    /*If not paused the song & change the "pause" icon state to default "play" icon state. */
    myAudio.pause();
    playPauseImg.src =
      "https://img.icons8.com/?size=100&id=fjx0LfGCNuZb&format=png&color=260101";
    playPauseBtn.style.backgroundColor = "#dfac99";
    playPauseBtn.style.borderColor = "#260101";
    playPauseBtn.style.transform = "scale(1)";
  }
}

function toggleAudio() {
  /*If the song is in the muted() state.*/
  if (myAudio.muted) {
    /*Then unmute the song.*/
    myAudio.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/?size=100&id=108731&format=png&color=260101";
    muteUnmuteButton.style.backgroundColor = "#dfac99";
    muteUnmuteButton.style.borderColor = "#260101";
    muteUnmuteButton.style.transform = "scale(1)";
  } else {
    /*If not then muted the song.*/
    myAudio.muted = true;
    muteUnmuteImg.src =
      "https://img.icons8.com/?size=100&id=102034&format=png&color=260101";
    muteUnmuteButton.style.backgroundColor = "#5C9EB7";
    muteUnmuteButton.style.borderColor = "#260101";
    muteUnmuteButton.style.transform = "scale(0.9)";
  }
}

/*Since in HTML the volume range for the HTML Audio/Video DOM volume Property is 0.0 to 1.0. Where 1.0 is default.
I wanted to have it so that when the "#decrease-volume-btn" button is pressed the volume of "1.0" is decreased by
0.1 iincrementally each time when the user pressed on the decrease volume button and vice versa.*/

/*When decrease volume button is pressed*/
function decreaseVolume() {
  /*Set current audio volume= Current audio volume - 0.1*/
  if (myAudio.volume > 0.11) {
    myAudio.volume = myAudio.volume - 0.1;
    volumeDecreaseBtn.style.backgroundColor = "#5C9EB7";
    volumeDecreaseBtn.style.borderColor = "#260101";
    volumeDecreaseBtn.style.transform = "scale(0.9)";
  } else {
    volumeDecreaseBtn.style.backgroundColor = "#dfac99";
    volumeDecreaseBtn.style.borderColor = "#260101";
    volumeDecreaseBtn.style.transform = "scale(1)";
  }
}

/*When increase volume button is pressed*/
function increaseVolume() {
  /*Set current audio volume = Current audio volume + 0.1*/
  if (myAudio.volume < 0.9) {
    myAudio.volume = myAudio.volume + 0.1;
    volumeIncreaseBtn.style.backgroundColor = "#5C9EB7";
    volumeIncreaseBtn.style.borderColor = "#260101";
    volumeIncreaseBtn.style.transform = "scale(0.9)";
  } else {
    volumeIncreaseBtn.style.backgroundColor = "#dfac99";
    volumeIncreaseBtn.style.borderColor = "#260101";
    volumeIncreaseBtn.style.transform = "scale(1)";
  }
}

/*When FastForwards 10 Seconds button is pressed*/
function forwards10Secs() {
  /*The current position of the audio = The current position of the audio + 10 seconds.*/
  myAudio.currentTime = myAudio.currentTime + 10;
  if (!isonclick) {
    Plus10SecsBtn.style.backgroundColor = "#5C9EB7";
    Plus10SecsBtn.style.borderColor = "#260101";
    Plus10SecsBtn.style.transform = "scale(0.9)";
    isonclick = true;
  } else {
    Plus10SecsBtn.style.backgroundColor = "#dfac99";
    Plus10SecsBtn.style.borderColor = "#260101";
    Plus10SecsBtn.style.transform = "scale(1)";
    isonclick = false;
  }
}

/*When Rewind 10 Seconds button is pressed*/
function backwards10Secs() {
  /*The current position of the audio = The current position of the audio - 10 seconds.*/
  myAudio.currentTime = myAudio.currentTime - 10;
  if (!isonclick) {
    Minus10SecsBtn.style.backgroundColor = "#5C9EB7";
    Minus10SecsBtn.style.borderColor = "#260101";
    Minus10SecsBtn.style.transform = "scale(0.9)";
    isonclick = true;
  } else {
    Minus10SecsBtn.style.backgroundColor = "#dfac99";
    Minus10SecsBtn.style.borderColor = "#260101";
    Minus10SecsBtn.style.transform = "scale(1)";
    isonclick = false;
  }
}

/*Showing the progress of the current audio track.*/
function showProgress() {
  const currentTime = myAudio.currentTime;
  console.log("current time", currentTime.toFixed(2));
  AudioTime.textContent = currentTime.toFixed(2);

  const progress = (currentTime / myAudio.duration) * 100;
  console.log("progress", progress.toFixed(2));
  progressBar.style.width = progress + "%";
}

/*Change audio track & use song-name according to the values defined within the array variable.*/
function chooseAudio(no) {
  myAudio.src = audios[no].src;
  MainCoverImg.src = audios[no].img;
  audioName.textContent = audios[no].name;
  myAudio.load();
  myAudio.play();
}
