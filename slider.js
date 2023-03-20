const slider = document.querySelector('.slider-items');
const slide = document.querySelector('.sliderItem');
// const progressBar = document.querySelector('.prog-bar-inner');
const leftBtnMain = document.querySelector('#leftMainSlider');
const rightBtnMain = document.querySelector('#rightMainSlider');

// pripremanje niza
let slidesPositions = [0];
let numberOfSlides = 10;
// slidesPositions.push(slide.offsetWidth / 2);
slidesPositions.push(345);
do {
    slidesPositions.push(slidesPositions[slidesPositions.length - 1] + slide.offsetWidth);
} while (slidesPositions.length < numberOfSlides - 1)
slidesPositions.push(slider.parentElement.scrollWidth);
console.log(slidesPositions);

let currentSlide = 1;
slider.parentElement.scrollLeft = slidesPositions[currentSlide];
leftBtnMain.addEventListener('click', () => {
    if(currentSlide > 0) {
        --currentSlide;
        slider.parentElement.scrollLeft = slidesPositions[currentSlide];
    }
});


rightBtnMain.addEventListener('click', () => {
    if(currentSlide < numberOfSlides - 1) {
        ++currentSlide;
        slider.parentElement.scrollLeft = slidesPositions[currentSlide];
    }
});
// OVO RADI POSAO 
// slider.parentElement.scrollLeft += 500;
// slider.parentElement.scrollLeft += 0;
// console.log(`sirina diva: ${pojedinacni.offsetWidth}`)
// console.log(slider.scrollLeft);
// console.log(slider.parentElement.scrollWidth);
// console.log(slider.parentElement.clientWidth);
let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    // console.log(getScrollPercentage());
    console.log(slider.parentElement.scrollLeft);
})

slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if(sliderGrabbed){
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

slider.addEventListener('wheel', (e) =>{
    e.preventDefault()
    slider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage(){
   return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
}

function proba(broj){
    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
 }
