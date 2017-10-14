const blackArea = document.getElementById("black-area");
const triangleTop = document.getElementById("triangle-descend");
const triangleBottom = document.getElementById("triangle-ascend");
const leftBlock = document.getElementById("left");
const rightBlock = document.getElementById("right");
const pane = document.getElementById("ghost-pane");

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
        setTimeout(() => {
            leftBlock.style.width = "0px";
            rightBlock.style.width = "0px";
            triangleBottom.style.borderBottom = "0px solid black";
            triangleTop.style.borderTop = "0px solid black";
        }, transitionSpeed * 1000);
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

wrapper.addEventListener("mouseover",
    () => {
        const transitionSpeed = 0.15;
        if (thumb.style.opacity === "1") {
            thumb.style.animation = `${transitionSpeed}s fadeout`;
            progressBar.style.animation = `${transitionSpeed}s fadeout`;
            fill.style.animation = `${transitionSpeed}s fadeout`;
        }
        setTimeout(() => {
            thumb.style.opacity = 0;
            progressBar.style.opacity = 0;
            fill.style.opacity = 0;
        }, 150);
    }
);

function showValue(val, vertical) {
    /* setup variables for the elements of our slider */
    var thumb = document.getElementById("thumb");
    var shell = document.getElementById("shell");
    var slider = document.getElementById("slider");

    var pc = val / (slider.max - slider.min); /* the percentage slider value */
    var thumbsize = 12; // css => .sliderthumb {height: 12px}
    var bigval = 700; /* widest value*/
    var smallval = 10; /*shortest value */
    var tracksize = bigval - thumbsize;
    var fillsize = 3;

    var fill = document.getElementById("fill");
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
}
/* we often need a function to set the slider values on page load */
function setValue(val, vertical) {
    document.getElementById("slider").value = val;
    showValue(val, vertical);
}

document.addEventListener('DOMContentLoaded', function() {
    setValue(100, false);
});

const silence = document.getElementById("silence");
const silenceSlide = document.getElementById("silence-pane");
const volumeFill = document.getElementById("volume-fill");
const volumeSlider = document.getElementById("volume-slider");
const volumeThumb = document.getElementById("volume-thumb");
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
        silent = false;
        setTimeout(function() {
            silenceSlide.style.animation = "";
        }, transitionSpeed * 1000);
    }
});

const volumeShell = document.getElementById("volume-shell");
const volumeBar = document.getElementById("volume-bar");


silence.addEventListener("mouseover", () => {
    const transitionSpeed = 0.15;
    volumeFill.style.opacity = 1;
    volumeBar.style.opacity = 1;
    volumeThumb.style.opacity = 1;
});

wrapper.addEventListener("mouseover",
    () => {
        const transitionSpeed = 0.15;
        if (volumeThumb.style.opacity === "1") {
            volumeThumb.style.animation = `${transitionSpeed}s fadeout`;
            volumeBar.style.animation = `${transitionSpeed}s fadeout`;
            volumeFill.style.animation = `${transitionSpeed}s fadeout`;
        }
        setTimeout(() => {
            volumeThumb.style.opacity = 0;
            volumeBar.style.opacity = 0;
            volumeFill.style.opacity = 0;
        }, 150);
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
}
/* we often need a function to set the slider values on page load */
function setVolumeValue(value, vertical) {
    document.getElementById("volume-slider").value = value;
    showVolumeValue(value, vertical);
}

document.addEventListener('DOMContentLoaded', function() {
    setVolumeValue(100, false);
})

volumeSlider.addEventListener("click", () => {
    console.log("listening to event")
    const transitionSpeed = 0.2;
    if (silent) {
        silent = false;
        silenceSlide.style.animation = `${transitionSpeed}s diagonalslideout reverse`;
        silenceSlide.style.left = 18 * (20 / 64) + "px";
        silenceSlide.style.top = -2 * (20 / 64) + "px";
        silenceSlide.style.width = "0px";
    }
    setTimeout(function() {
        silenceSlide.style.animation = "";
    }, transitionSpeed * 1000);
    // setVolumeValue(100, false);
});