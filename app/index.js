// style was needed to be an IIFE so that it can be attached to head, else be undefined;
const style = (function() {
    var style = document.createElement("style");

    // WebKit hack
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);

    return style;
})();

const rules = [
    `
@keyframes slideScrub {
    from {
        width: 60px;
    }
    to {
        width: 0px;
    }
}
`, `
@keyframes slideBar {
    from {
        left: 4px;
        width: 0px;
    }
    to {
        width: 48px;
    }
}
`, `
@keyframes slideFill {
    from {
        left: 4px;
        width: 0px;
    }
    to {
        width: 544px;
    }
}
`,
    `
@keyframes slideLeftThumb {
    from {
        left: 0px;
    }
    to {
        left: 48px;
    }
}
`
];

for (let i = 0; i < rules.length; i++) {
    style.sheet.insertRule(rules[i], i);
}

const blackArea = document.getElementById("black-area");
const triangleTop = document.getElementById("triangle-descend");
const triangleBottom = document.getElementById("triangle-ascend");
const leftBlock = document.getElementById("left");
const rightBlock = document.getElementById("right");
const pane = document.getElementById("ghost-pane");
let videoPaused = true;

pane.addEventListener("click", () => {
    if (leftBlock.style.width === "0px") {
        const transitionSpeed = 0.3;
        const buttonWidth = "20px";
        const buttonHeight = "20px";
        const slowerSpeed = transitionSpeed * 1.5;

        triangleBottom.style.animation = `${slowerSpeed}s triangleBottomAppear`;
        triangleTop.style.animation = `${slowerSpeed}s triangleTopAppear`;
        leftBlock.style.animation = `${transitionSpeed}s blocksCombine`;
        rightBlock.style.animation = `${transitionSpeed}s blocksCombine`;
        video.pause();
        videoPaused = true;
        setTimeout(() => {
            leftBlock.style.width = buttonWidth;
            rightBlock.style.width = buttonWidth;
            triangleBottom.style.borderBottom = `10px solid black`;
            triangleTop.style.borderTop = `10px solid black`;
        }, transitionSpeed * 1000);
    } else {
        const transitionSpeed = 0.3;
        const slowerSpeed = transitionSpeed * 3;
        triangleBottom.style.animation = `${transitionSpeed}s triangleBottomDisappear`;
        triangleTop.style.animation = `${transitionSpeed}s triangleTopDisappear`;
        leftBlock.style.animation = `${slowerSpeed}s blocksApart`;
        rightBlock.style.animation = `${slowerSpeed}s blocksApart`;
        video.play();
        videoPaused = false;
        setTimeout(() => {
            leftBlock.style.width = "0px";
            rightBlock.style.width = "0px";
            triangleBottom.style.borderBottom = "0px solid black";
            triangleTop.style.borderTop = "0px solid black";
        }, transitionSpeed * 1000);
        const playBack = document.getElementById("playback-time");
        const timeUpdated = new Promise((resolve, reject) => {
            if (!videoPaused) {
                return resolve();
            }
        });
        let time;
        timeUpdated.then(() => {
            setInterval(() => {
                time = Math.ceil(video.currentTime)
                if (time <= 9) {
                    time = `0${time}`;
                }
                playBack.innerHTML = `<h5>0:${time} / 00:12</h5>`;
            }, 1000)
        });
    }
});

const videoControls = document.getElementById("video-controls");
const wrapper = document.getElementById("footer-wrapper")
const thumb = document.getElementById("thumb");
const shell = document.getElementById("shell");
const progressBar = document.getElementById("progress-bar");
const fill = document.getElementById("fill");
const scrubCase = document.getElementById("scrub-case");

scrubCase.addEventListener("mouseover", () => {
    const transitionSpeed = 0.15;
    fill.style.opacity = 1;
    progressBar.style.opacity = 1;
    fill.style.animation = `${transitionSpeed}s lengthenScrub`;
    progressBar.style.animation = `${transitionSpeed}s lengthenScrub`;
    document.addEventListener("mousedown", () => {
        fill.style.height = "4px";
        progressBar.style.height = "4px";
        fill.style.top = "4px";
        progressBar.style.top = "4px";
    });
    setTimeout(() => {
        fill.style.height = "4px";
        progressBar.style.height = "4px";
        fill.style.top = "4px";
        progressBar.style.top = "4px";
        thumb.style.opacity = 1;
    }, 150);
});

videoControls.addEventListener("mouseover", () => {
    const transitionSpeed = 0.3;
    if (fill.style.opacity === "" || fill.style.opacity === 0) {
        progressBar.style.animation = `${transitionSpeed}s fadein easeout`;
        fill.style.animation = `${transitionSpeed}s fadein easeout`;
        thumb.style.opacity = 0;
    }
    fill.style.animation = `${transitionSpeed}s shortenScrub`;
    progressBar.style.animation = `${transitionSpeed}s shortenScrub`;
    thumb.style.animation = `${transitionSpeed}s disappearThumb`;

    setTimeout(() => {
        // which will become

        thumb.style.opacity = 0;
        thumb.style.height = "12px";
        thumb.style.width = "12px";
        thumb.style.top = "0px";

        fill.style.height = "3px";
        progressBar.style.height = "3px";
        fill.style.top = "5px";
        progressBar.style.top = "5px";
        progressBar.style.opacity = 1;
        fill.style.opacity = 1;
    }, 200);
});


function showValue(val, vertical) {
    /* setup variables for the elements of our slider */
    var thumb = document.getElementById("thumb"); //588px
    var shell = document.getElementById("shell");
    var slider = document.getElementById("slider");
    const fill = document.getElementById("fill"); // 594px

    var pc = val / (slider.max - slider.min); /* the percentage slider value */
    var thumbsize = 12; // css => .sliderthumb {height: 12px}
    var bigval = 700; /* widest value*/
    var smallval = 10; /*shortest value */
    var tracksize = 688;
    var fillsize = 3;

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {

        if (!videoPaused) {
            thumb.style.left = 688 * (video.currentTime / video.duration) + "px";
            fill.style.width = 700 * (video.currentTime / video.duration) + "px";
        }
    });

    const scrubberMoves = new Promise((resolve, reject) => {
        if (val) {
            console.log(val);
            return resolve();
        }
    });

    scrubberMoves.then(() => {
        // centralises the the .sliderthumb along the fill line
        fill.style.top = "4px";
        // shifts left of container
        fill.style.left = "4px";
        fill.style.height = "4px";
        progressBar.style.top = "4px";
        progressBar.style.height = "4px";

        var loc = vertical ? (1 - pc) * tracksize : pc * tracksize;
        fill.style.width = loc + (thumbsize / 2) + "px";

        thumb.style.left = (vertical ? 0 : loc) + "px";
        shell.style.height = (vertical ? bigval : 0) + "px";
        shell.style.width = (vertical ? 0 : bigval) + "px";
    });
}



/* we often need a function to set the slider values on page load */
function setValue(val, vertical) {
    document.getElementById("slider").value = val;
    showValue(val, vertical);
}



document.addEventListener('DOMContentLoaded', function() {
    console.log(video.currentTime);
    setValue(0, false);
});

const silence = document.getElementById("silence");
const silenceSlide = document.getElementById("silence-pane");
const volumeFill = document.getElementById("volume-fill");
const volumeSlider = document.getElementById("volume-slider");
const volumeThumb = document.getElementById("volume-thumb");
const volumeScrub = document.getElementById("volume-scrub");
let volumeValue = NaN;
let silent = false;

silenceSlide.addEventListener("click", () => {
    const transitionSpeed = 0.2;
    if (silenceSlide.style.width === "0px" || silenceSlide.style.width === "") {
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout`;
        silenceSlide.style.left = -6 * (20 / 64) + "px";
        silenceSlide.style.top = 32 * (20 / 64) + "px";
        silenceSlide.style.width = 100 * (20 / 64) + "px";

        //set thumb, fill and value to 'zero' upon silence btn click
        volumeThumb.style.left = "0px";
        volumeFill.style.width = "0px";
        volumeSlider.value = "0";
        video.volume = 0;
        silent = true;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    } else {
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout reverse`;
        silenceSlide.style.left = 18 * (20 / 64) + "px";
        silenceSlide.style.top = -2 * (20 / 64) + "px";
        silenceSlide.style.width = "0px";

        // default position of thumb, fill and value after silence is removed
        volumeThumb.style.left = (48 / 100) * volumeValue + "px";
        volumeFill.style.width = (54 / 100) * volumeValue + "px";
        volumeSlider.value = `${volumeValue}`;
        video.volume = volumeValue / 100;
        silent = false;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    }
});

silence.addEventListener("click", () => {

    const transitionSpeed = 0.2;
    if (silenceSlide.style.width === "0px" || silenceSlide.style.width === "") {
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout`;
        silenceSlide.style.left = -6 * (20 / 64) + "px";
        silenceSlide.style.top = 32 * (20 / 64) + "px";
        silenceSlide.style.width = 100 * (20 / 64) + "px";
        volumeThumb.style.left = "0px";
        volumeFill.style.width = "0px";
        volumeSlider.value = "0";
        video.volume = 0;
        silent = true;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    } else {
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout reverse`;
        silenceSlide.style.left = 18 * (20 / 64) + "px";
        silenceSlide.style.top = -2 * (20 / 64) + "px";
        silenceSlide.style.width = "0px";

        // default position of thumb, fill and value after silence is removed
        volumeThumb.style.left = (48 / 100) * volumeValue + "px";
        volumeFill.style.width = (54 / 100) * volumeValue + "px";
        volumeSlider.value = `${volumeValue}`;
        video.volume = volumeValue / 100;
        silent = false;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    }
});

const volumeShell = document.getElementById("volume-shell");
const volumeBar = document.getElementById("volume-bar");
silence.addEventListener("mouseover", () => {

    const scrubWidth = 54;
    const barWidth = 54;
    const thumbLeft = (48 / 100) * volumeValue;
    const fillWidth = (54 / 100) * volumeValue;

    const rules = [
        `
    @keyframes slideScrub {
        from {
            width: ${scrubWidth}px;
        }
        to {
            width: 0px;
        }
    }
    `, `
    @keyframes slideBar {
        from {
            left: 4px;
            width: 0px;
        }
        to {
            width: ${barWidth}px;
        }
    }
    `, `
    @keyframes slideFill {
        from {
            left: 4px;
            width: 0px;
        }
        to {
            width: ${fillWidth}px;
        }
    }
    `,
        `
    @keyframes slideLeftThumb {
        from {
            left: 0px;
        }
        to {
            left: ${thumbLeft}px;
        }
    }
    `
    ];

    // A hack to dynamically change the position of volume Scrubber
    // remove when a better solution is found
    const promise = new Promise((resolve, reject) => {
        if (style.sheet.cssRules.length) {
            return resolve();
        }
    });

    promise
        .then(() => {
            for (let i = 0; i < rules.length - 2; i++) {
                style.sheet.deleteRule(i);
            }
            style.sheet.deleteRule(0);

        }).then(() => {
            style.sheet.deleteRule(0);
        })
        .then(() => {
            for (let i = 0; i < rules.length; i++) {
                style.sheet.insertRule(rules[i], i);
            }
        });


    if (volumeScrub.style.width === "0px" || volumeScrub.style.width === "") {
        const transitionSpeed = 0.05;
        volumeFill.style.opacity = 1;
        volumeBar.style.opacity = 1;
        volumeFill.style.animation = `${transitionSpeed}s ease-in-out slideFill`;
        volumeBar.style.animation = `${transitionSpeed}s ease-in-out slideBar`;
        volumeThumb.style.animation = `${transitionSpeed}s ease-in-out slideLeftThumb`;
        volumeScrub.style.animation = `${transitionSpeed}s ease-in-out slideScrub reverse`;

        setTimeout(() => {
            volumeThumb.style.opacity = 1;
            volumeFill.style.animation = "";
            volumeThumb.style.animation = "";
            volumeScrub.style.animation = "";
            volumeBar.style.animation = "";

            volumeScrub.style.width = scrubWidth + "px";
            volumeBar.style.width = barWidth + "px";
            volumeThumb.style.left = thumbLeft + "px";
            volumeFill.style.width = fillWidth + "px";
        }, transitionSpeed * 1000)
    }
});

wrapper.addEventListener("mouseover",
    () => {
        const transitionSpeed = 0.05;
        if (thumb.style.opacity === "1") {
            thumb.style.opacity = 0;
            progressBar.style.animation = `${transitionSpeed}s fadeout`;
            fill.style.animation = `${transitionSpeed}s fadeout`;
        }
        setTimeout(() => {
            progressBar.style.opacity = 0;
            fill.style.opacity = 0;
        }, transitionSpeed * 1000);
        if (volumeThumb.style.opacity === "1") {
            volumeFill.style.animation = `${transitionSpeed}s ease-in-out slideFill reverse`;
            volumeBar.style.animation = `${transitionSpeed}s ease-in-out slideBar reverse`;
            volumeThumb.style.animation = `${transitionSpeed}s ease-in-out slideLeftThumb reverse`;
            volumeScrub.style.animation = `${transitionSpeed}s ease-in-out slideScrub`;

            setTimeout(() => {
                volumeFill.style.animation = "";
                volumeThumb.style.animation = "";
                volumeScrub.style.animation = "";
                volumeFill.style.opacity = 0;
                volumeBar.style.opacity = 0;
                volumeThumb.style.opacity = 0;
                volumeScrub.style.width = "0px";
            }, transitionSpeed * 1000);
        }
    }
);

function showVolumeValue(value, vertical) {
    /* setup variables for the elements of our slider */
    const volumeThumb = document.getElementById("volume-thumb");
    const volumeShell = document.getElementById("volume-shell");
    const volumeSlider = document.getElementById("volume-slider");
    var pc = value / (slider.max - slider.min); /* the percentage slider value */
    var volumeThumbsize = 12; // css => .slider volumeThumb {height: 12px}
    var bigval = 60; /* widest value*/
    var smallval = 10; /*shortest value */
    var tracksize = bigval - volumeThumbsize;
    var volumeFillsize = 3;

    var location = vertical ? (1 - pc) * tracksize : pc * tracksize;
    volumeFill.style.width = location + (volumeThumbsize / 2) + "px";

    volumeThumb.style.left = (vertical ? 0 : location) + "px";
    volumeSlider.style.height = (vertical ? bigval : 0) + "px";
    volumeSlider.style.width = (vertical ? 0 : bigval) + "px";
    volumeValue = value;
    // `full` width => show all speaker concentric circles
    // `half` width or less => show half circle
    //  `zero` width => should diagonalslide animation, to signal silence
    let slideSilent = new Promise((resolve, reject) => {
        video.volume = volumeValue / 100;
        if (value == "0") {
            return resolve();
        } else if (value !== "0" && silent === true) {
            return reject()
        }
    });

    slideSilent.then(() => {
        const transitionSpeed = 0.2;
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout`;
        silenceSlide.style.left = -6 * (20 / 64) + "px";
        silenceSlide.style.top = 32 * (20 / 64) + "px";
        silenceSlide.style.width = 100 * (20 / 64) + "px";
        volumeThumb.style.left = "0px";
        volumeFill.style.width = "0px";
        silent = true;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    }).catch(() => { // linking catch statements stops the console regurgitating your errors
        const transitionSpeed = 0.2;
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout reverse`;
        silenceSlide.style.left = 18 * (20 / 64) + "px";
        silenceSlide.style.top = -2 * (20 / 64) + "px";
        silenceSlide.style.width = "0px";

        // default position of thumb, fill and value after silence is removed
        volumeThumb.style.left = (48 / 100) * volumeValue + "px";
        volumeFill.style.width = (54 / 100) * volumeValue + "px";
        volumeSlider.value = `${volumeValue}`;
        silent = false;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    });

}
/* we often need a function to set the slider values on page load */
function setVolumeValue(value, vertical) {
    document.getElementById("volume-slider").value = value;
    showVolumeValue(value, vertical);
}

document.addEventListener('DOMContentLoaded', function() {
    setVolumeValue(100, false);
})

const settings = document.getElementById("settings");

settings.addEventListener("click", () => {
    const changeVideoTime = () => {
        video.currentTime = 5;
    }
    changeVideoTime();
    const transitionSpeed = 0.2;
    if (settings.style.transform === "") {
        settings.style.animation = `${transitionSpeed}s rotate60clockwise`;
        setTimeout(() => {
            settings.style.animation = "";
            settings.style.transform = "rotate(30deg)";
            // usually it is set to 1000ms, however 900ms stops animation from a technical glitch
        }, transitionSpeed * 900);
    } else {
        settings.style.animation = `${transitionSpeed}s rotate60clockwise reverse`;
        setTimeout(() => {
            settings.style.animation = "";
            settings.style.transform = "";
        }, transitionSpeed * 900);
        // const container = document.getElementById("container");
        // const mainDiv = document.createElement("div");
        // const div = document.createElement("div");
        // mainDiv.style["grid-area"] = "5/7/10/11";
        // mainDiv.style.backgroundColor = "silver";
        // mainDiv.style.width = "100%";
        // mainDiv.style.height = "100%";
        // // div.style.display = "flex";
        // // div.style["align-items"] = "center";


        // const innerDivs = [...Array(5)].map((e, i) => {
        //     let subDiv = document.createElement("div");
        //     if (i == 0) {
        //         subDiv.style.height = "10px";
        //         subDiv.style.width = "240px";
        //         // subDiv.style.backgroundColor = "white";
        //     } else {
        //         subDiv.style.height = "45px";
        //         subDiv.style.width = "240px";
        //         subDiv.style.backgroundColor = "red";
        //     }

        //     subDiv.style.id = `subDiv-${i}`;
        //     e = subDiv
        //     div.appendChild(e);
        // });
        // container.appendChild(div);


        // settings.style.animation = `${transitionSpeed}s rotate60clockwise reverse`;
        // settings.style.transform = "rotate(0deg)";
    }
});