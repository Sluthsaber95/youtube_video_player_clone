const fullScreenButton = document.getElementById("full-screen");
const muteButton = document.getElementById("mute");
const playButton = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const video = document.getElementById("video");
const volumeBar = document.getElementById("volume-bar");
const timeDuration = document.getElementById("time-duration");
const seekTime = document.getElementById("seek-time");
const duration = document.getElementById("duration");


const timing = () => {
    const timeUpdated = new Promise((resolve, reject) => {
        if (setState.isPlaying) {
            return resolve();
        } else {
            return reject();
        }
    });
    let time;
    let seconds;
    timeUpdated.then(() => {
        seconds = setInterval(() => {
            time = Math.ceil(video.currentTime)
            if (time <= 9) {
                time = `0${time}`;
            }
            timeDuration.innerHTML = `0:${time} / 0:11`;
            // }, 1000);
        })
    }).catch(() => {
        clearInterval(seconds);
    });
}