function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    drawCreature(750, 400);
    drawCreature(350, 200);
    drawCreature(1000, 700);
    drawCreature(1300, 300);
    drawCreature(200, 600);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature (x, y) {
    // https://p5js.org/reference/#/p5/circle
    fill("white")
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

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve