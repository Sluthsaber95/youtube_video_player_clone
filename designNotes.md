Last Updated: 13/10/2017

# Design Notes

## Observations

### Changes to previous versions

Surprisingly since using YouTube, they've managed to get rid of `Backward Button`. So button is removed from the design

### Details on features

+ Cinema-mode button disappears if you resize the screen, to small enough length. When clicking on the button, it grows and shrinks - depending on what mode you are in
- Subtitles button has a red lines going across it underneath it

### Difficult Features

+ Speaker Scrubber is by far the most difficult one


## Things Learnt + Knowledge gained

### Calc

Used to calculate weird fractions etc

width: calc(100%/3); Even used it in JS.
cinemaMode.style.transform = "scale(calc(115/135), 0.75)";

### const

const always needs to be initialized, else a syntax error is thrown

### Using CSSOM => 
#### Changing keyframe animation Variables

Time to experiment with the CSSOM.
Aim: here is figure how to change a css keyframe

- Discovered this hack -https://stackoverflow.com/questions/28930846/how-to-use-cssstylesheet-insertrule-properly
    - however if you look at mozilla docs, it believed that it is a better practice - https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
    - states that dynamically changing of class is much better than adding extra elements to the DOM
    - [Author Unknown] -` But, say you want to dynamically keep adding in keyframes over and over again, then your webpage get really laggy really quick. To solve this problem, just STOP creating new DOM elements. Rather, create 1 new DOM stylesheet, and just reuse it with the inertRule. If you want even more keyframes (like if you're generating a new keyframe every animationframe), then you need to set up a system which deletes old keyframes ` - https://stackoverflow.com/questions/18481550/how-to-dynamically-create-keyframe-css-animations?newreg=7d37b0f4a0a54f2a8a1c7d94536c3a09

### Scaling + Speed

When time was spent on prototyping the icons. Time should have been placed out to see what the animation and image even. At the appropriate scale, or one that this very similar to what is meant to cloned in the first place.

### Naming

Learning the exact name of the components you are using. And learn to name thing in a way where it reads like English.

### Object Priority

Some objects have priority over others, us this as a way of constructing cleaner designs.

### Use Cases

You can test things for use cases that's fine, a step up from that would be more practical to test them based off events. 

## Issues

- Pause button, requires a redraw and effect remade
- Volume button, requires redraw and effect added, where when user scrolls to half of the bar or less. The speaker symbol loses a ring
- Volume button hover, just found out that I just did the effects wrong. There is a div that contains the time, that slides over, the speaker scrubber design ingenious.
    - thus instead of finally setting the opacity of the scrub div to `zero`. The div just overlaps the scrub div - no need to make it go flash
- Stutter effect when cursor is over .wrapper, and quickly switches to the .screen div 
    - The playback scrubber doesn't switch off, related to this issue
 
## Note to self

### Cloning  Apps

Next time when I want to clone anything, I'll need to;

1. List all the features available
2. interdependencies between each feature
3. possible states and values that can be entered
4. (2. and 3.), see how these interdependies and state affect each other

However something to notice, is that features occur so fast, it you will need to place in the hard work. Before noticing the sutle differences.