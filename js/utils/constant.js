const duration = document.getElementById("duration");
const fullScreenButton = document.getElementById("full-screen");
const muteButton = document.getElementById("mute");
const playButton = document.getElementById("play-pause");
const timeDuration = document.getElementById("time-duration");
const seekBar = document.getElementById("seek-bar");
const seekTime = document.getElementById("seek-time");
const video = document.getElementById("video");
const volumeBar = document.getElementById("volume-bar");
const mainScreen = document.getElementById("main-screen");

define(function() {
    return {
        duration,
        fullScreenButton,
        muteButton,
        playButton,
        timeDuration,
        seekBar,
        seekTime,
        video,
        volumeBar,
        mainScreen
    }
});