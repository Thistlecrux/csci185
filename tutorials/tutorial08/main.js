function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}



function mouseDragged(){
let color = document.querySelector("#color")
let size = document.querySelector("#size")
let shape = document.querySelector("#shape")

    if (shape.value === "circle") {
        circle(mouseX, mouseY, size.value);
       }
    else if (shape.value === "square") {
        square(mouseX, mouseY, size.value);
       }
    else if (shape.value === "triangle") {
        triangle(
            mouseX, mouseY, // first point
            (mouseX) + size.value*(-.6), (mouseY) + size.value*.9, // second point
            (mouseX) + size.value*(.6), (mouseY) + size.value*.9,  // third point

        )
       }

       fill(color.value) ;
       //size(size.value);
}



/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/