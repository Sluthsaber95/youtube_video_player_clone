Last Updated: 13/10/2017

# Design Notes

## Observations

### Changes to previous versions

Surprisingly since using YouTube, they've managed to get rid of `Backward Button`. So button is removed from the design

### Details on features

+ Cinema-mode button disappears if you resize the screen, to small enough length. When clicking on the button, it grows and shrinks - depending on what mode you are in
- Subtitles button has a red lines going across it underneath it

### Difficult Features

+ Video Scrubber is by far the most difficult one


## Things Learnt + Knowledge gained

### Calc

Used to calculate weird fractions etc

width: calc(100%/3); Even used it in JS.
cinemaMode.style.transform = "scale(calc(115/135), 0.75)";

### const

const always needs to be initialized, else a syntax error is thrown

### cloning not to self

Next time when I want to clone anything, I'll need to;

1. List all the features available
2. interdependencies between each feature
3. possible states and values that can be entered
4. (2. and 3.), see how these interdependies and state affect each other

## Issues

 


