let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);


   // circle(x, y, width);
   drawCreature(x, y, fillColor, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    fill(fillColor);
    if (ev.code === "ArrowUp") {
        y = y-5;
    }
    else if (ev.code === "ArrowDown") {
        y = y+5;
    }
    else if (ev.code === "ArrowRight") {
        x = x+5;
    }
    else if (ev.code === "ArrowLeft") {
        x = x-5;
    }
    else if (ev.code === "Space") {
        width = width+5;
    }
    else if (ev.code === "Escape") {
        width = width-5;
    }
    else if (ev.code === "KeyR") {
        fillColor = "red";
    }
    clear();
    fill(fillColor);
    //circle(x, y, width);
    drawCreature(x, y, fillColor, width);
    drawGrid(canvasWidth, canvasHeight);
}

function drawCreature (x, y, color) {
    // https://p5js.org/reference/#/p5/circle
    fill(color)
    circle(x, y, 300);
    fill("black")
    circle(x -80, y-50, 80);
    fill("black")
    circle(x +80, y -50, 80);
    fill("white")
    circle(x +100, y -60, 40);
    fill("white")
    circle(x - 60, y -60, 40);


    // https://p5js.org/reference/#/p5/rect
    fill('black')
    rect(x -30, y +50, 60, 10);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
