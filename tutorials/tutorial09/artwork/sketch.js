const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];
let speed = 1;

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
    
    fill("#08415c");

    // draw a random circle:
    for (let index = 1; index <= 100; index++) {
        console.log ("circle(x, y, size)");
        x = randomInt(0, canvasWidth);
        y = randomInt(0, canvasHeight);
        size = randomFloat(25, 125);
       circle(x, y, size);
    
    }

    for (let index = 1; index <= 50; index++) {
        console.log ("circle(x, y, size)");
        x = randomInt(0, canvasWidth);
        y = randomInt(0, canvasHeight);
        size = randomFloat(25, 125);
       square(x, y, size);
       fill ("hotpink");
    
    }
    
}


function draw() {

    for (let index = 1; index <= 2; index++) {
        console.log ("circle(x, y, size)");
        x = randomInt(0, canvasWidth);
        y = randomInt(0, canvasHeight);
        size = randomFloat(25, 125);
       square(x, y, size);
       fill ("hotpink");
    
    } 
   frameRate (6)
}


// // anything that you want to animate goes in this function:  
// function draw() {
//     clear();

// }


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

