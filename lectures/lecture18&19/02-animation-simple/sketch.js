let x = 100;
let y = 200;
let width = 50;

let x2 = 1300;
let y2 = 300;
let width2 = 50;

let speed = 1;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    x += speed;         //animates circle 1
    y -= 2

    x2 -= speed;        //animates circle 2
    y2 += 2

    clear();
    noFill();
    circle(x, y, width);
    circle(x2 , y2, width2)
    drawGrid(canvasWidth, canvasHeight);
}
