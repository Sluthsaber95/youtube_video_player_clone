const actionRetreive = (action) => {
    switch (action.type) {
        case "play":
            state.isPlaying = true;
            video.action;
            break;
        case "pause":
            state.isPlaying = false;
            video.action;
    }
}
define(["./state", "./constant"], function(state, constant) {
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
            constant.video.play();
            // change the image of play to pause button
            constant.playButton.innerHTML = "";
            const image = document.createElement("img");
            image.src = "./assets/img/pause.png";
            constant.playButton.appendChild(image);

            seconds = setInterval(() => {
                //Timer
                time = Math.floor(video.currentTime)
                if (time <= 9) {
                    time = `0${time}`;
                }
                //Timer for mobile
                constant.seekTime.innerHTML = `0:${time}`
                    //Timer for website
                constant.timeDuration.innerHTML = `0:${time} / 0:11`;
            })
        }).catch(() => {

            // change the image of pause to play button
            constant.video.pause();
            constant.playButton.innerHTML = "";
            const image = document.createElement("img");
            image.src = "./assets/img/play.png";
            constant.playButton.appendChild(image);

            clearInterval(seconds);
        });
    }
    return {
        timing
    }
});