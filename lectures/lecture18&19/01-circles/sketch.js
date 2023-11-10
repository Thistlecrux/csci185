function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill("white");
    let y = 0;
    let w = 50;
    let x = 0
    while (y <= 600) {

        circle(x, 200, w)
        x += 5

        circle(100, y, w);
        circle(300, y*2, w);
        circle(500, y*3, w);
        y += 5;
        w += 1;
    }
    drawGrid(canvasWidth, canvasHeight);
}
