const setState = {
    isPlaying: false,
    orientation: "landscape"
}

define(["./device"], function(device) {
    return {
        isPlaying: setState.isPlaying,
        orientation: setState.orientation,
        device: deviceParser(navigator.userAgent)
            // value,
            // speed,
            // left
    }
});