const photos = [
    "portfolio.images/dahlia.JPG",
    "portfolio.images/artemoose.JPG",
    "portfolio.images/fauxre.jpeg",
    "portfolio.images/eddie.JPG",
    "portfolio.images/bondi.JPG",
    "portfolio.images/lilith.jpeg",
    "portfolio.images/solstice.JPG",
    "portfolio.images/poptart.JPG",
    "portfolio.images/khalid.JPG",
    "portfolio.images/solitude.JPG",
    "portfolio.images/tetsuro.JPG",
    "portfolio.images/knix.JPG",
    "portfolio.images/senzi.JPG",
    "portfolio.images/bait.JPG",
    

];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image');
    const img = document.querySelector(".current-photo img");
    img.src = '../'+photos[idx];
    document.querySelector(".caption").innerHTML = "Image "+(idx+1)+" of 14"

}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    idx += 1;
    if (idx > photos.length-1) {
        idx = 0;
    } 
    showImage();   
}



/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back');
    idx -= 1;
    if (idx < 0) {
        idx = photos.length-1;
    } 
    showImage();
}
