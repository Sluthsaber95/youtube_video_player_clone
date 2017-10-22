
User Stories

As a user; 

### Video Controls
+ I want to skip backwards or forwards to the next video
+ While the video is pause, I want scrub forward and backwards at specified points of the video
+ I want to Pause and Play the video, via the Play/Pause button 
+ I want to Pause and Play the video, by clicking on the screen

### Volume
+ I want to mute and unmute my video
+ I want to alter the volume, even mute my video or play at full volume.

### Duration
+ I want to see the Duration and Time counter While the video is played

### Settings
+ I want to Toggle annotations
+ I want to speed up or slow down the play-speed of the video
+ I want to Toggle the quality of the video

### Screen Settings
+ I want to toggle back and fourth Default Mode and Cinema Mode
+ I want to toggle back and fourth Default Mode PREVIOUSLY ON and Full-screen Mode

### Related Videos
+ I want to see more related video when I click on the infomation favicon.

### Abstraction
+ I want all the controls removed from sight, whilst the video is being played

Issues found

+ Full-screen mode still implement native browser video player capabilities
    + SOLUTION USED: Shadow DOM and interacting with Pseudo-classes which can be implemented   
    https://css-tricks.com/custom-controls-in-html5-video-full-screen/#article-header-id-1
    + Worse comes to worse, just position the custom controls over the native ones
    + Best Practice Solution - When you apply fullscreen mode, are you applying it to the VIDEO element? If so, that’s the problem — if you wrap the VIDEO in a container DIV and then apply fullscreen to that container, then it all works as expected, in all browsers that support fullscreen mode (i.e. recent versions of Chrome, Safari, Firefox and Opera).
    Author James Edwards 