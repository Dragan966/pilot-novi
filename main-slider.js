const sliders = document.querySelectorAll('.slider-items');
// const progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

sliders.forEach((slider) => {
    slider.parentElement.addEventListener('scroll', (e) => {
        // progressBar.style.width  = `${getScrollPercentage()}%`
        // console.log(slider.parentElement.scrollLeft);
        // console.log(slider.parentElement.scrollWidth / slider.parentElement.clientWidth);s
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

    const positions = [0];
    while(positions[positions.length - 1] < slider.parentElement.scrollWidth){
        positions.push(positions[positions.length - 1] + slider.parentElement.clientWidth)
    }


    function currentSlide () {
        let test = positions.filter(postion => slider.parentElement.scrollLeft >= postion);
        return test.length;
    }

    // leftBtn 
    slider.parentElement.nextElementSibling.childNodes[1].addEventListener('click', () => {
        console.log(slider.parentElement.nextElementSibling.childNodes[1])
        slider.parentElement.scrollLeft = positions[currentSlide() - 2];
    });

    // rightBtn 
    slider.parentElement.nextElementSibling.childNodes[3].addEventListener('click', () => {
        console.log(slider.parentElement.nextElementSibling.childNodes[3])
        slider.parentElement.scrollLeft = positions[currentSlide()];
    });
});

