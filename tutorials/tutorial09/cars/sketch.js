const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 4,
    color: 'hotpink'
};
const c2 = {
    x: 1300,
    y: 400,
    width: 200,
    speed: 4,
    color: 'green'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);


    if (c1.x > canvasWidth) {
        clear();
        drawCar(c1.x - 1400, c1.y, c1.width, c1.color);
    }

    
    // move the car:
    c2.x -= c2.speed;

    // redraw the car:
    drawCar(c2.x, c2.y, c2.width, c2.color);

    if (c2.x > canvasWidth) {
        clear();
        drawCar(c2.x + 1300, c2.y, c2.width, c2.color);
    }
//I can't for the life of me figure out why the green car won't loop

}




// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
