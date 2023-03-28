const sliders = document.querySelectorAll('.slider-items');
// const progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

sliders.forEach((slider) => {
    let touchStartX = 0;
    let touchEndX = 0;

    slider.parentElement.addEventListener('scroll', (e) => {
        // progressBar.style.width  = `${getScrollPercentage()}%`
        // console.log(slider.parentElement.scrollLeft);
        // console.log(slider.parentElement.scrollWidth / slider.parentElement.clientWidth);s
    });
    
    slider.addEventListener('mousedown', (e) => {
        sliderGrabbed = true;
        slider.style.cursor = 'grabbing';
        if (slider.classList.contains('bigSlider')) {
            slider.parentElement.style.overflow = 'scroll';
            touchStartX = e.clientX;
            // console.log('touchStartX' + touchStartX)
        }
    });
    
    slider.addEventListener('mouseup', (e) => {
        sliderGrabbed = false;
        slider.style.cursor = 'grab';
        if (slider.classList.contains('bigSlider')) {
            touchEndX = e.clientX;
            // console.log('touchEndX' + touchEndX)
            if (touchEndX < touchStartX && touchStartX - touchEndX > 50) {
                slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft) + 1]);
            } else if (touchEndX > touchStartX && touchEndX - touchStartX > 50) {
                slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft - 1)]);
            } else {
                slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft)]);
            }
        }
    });
    
    slider.addEventListener('mouseleave', (e) => {
        sliderGrabbed = false;
    });
    
    slider.addEventListener('mousemove', (e) => {
        if(sliderGrabbed){
            slider.parentElement.scrollLeft -= e.movementX;
        }
    });
    
    slider.addEventListener('wheel', (e) =>{
        e.preventDefault()
        slider.parentElement.scrollLeft += e.deltaY;
    });
    
    function getScrollPercentage(){
       return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
    }

    const positions = [0];
    while(positions[positions.length - 1] < slider.parentElement.scrollWidth){
        positions.push(positions[positions.length - 1] + slider.parentElement.clientWidth)
    }
    console.log(positions);

    function currentSlide (scrollLeft) {
        let test = positions.filter(postion => scrollLeft >= postion);
        return test.length - 1;
    }

    

    function slideAnimation(position) {
        const startPosition = slider.parentElement.scrollLeft;
        const distance = position - startPosition;
        let duration;
        if(window.innerWidth > 1000) {
            duration = 500;
        } else {
            duration = 300;
        }
        let start = null;
      
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          let ease;
          if (window.innerWidth > 1000) {
            ease = (progress / duration) ** 2; //ease-in-out
          } else {
            ease = (progress / duration);// ** 2; //ease-in-out
          }
          const scrollLeft = startPosition + distance * ease;
          if ((distance > 0 && scrollLeft >= position) || (distance < 0 && scrollLeft <= position)) {
            slider.parentElement.scrollLeft = position;
            slider.parentElement.style.overflow = 'hidden';
            return;
          }
          slider.parentElement.scrollLeft = scrollLeft;
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }
      
        window.requestAnimationFrame(step);
    }

      
    // leftBtn 
    slider.parentElement.nextElementSibling.childNodes[1].addEventListener('click', () => {
            slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft - 1)]);
    });

    // rightBtn 
    slider.parentElement.nextElementSibling.childNodes[3].addEventListener('click', () => {
        slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft) + 1]);
    });

    

    slider.addEventListener("touchstart", (event) => {
        if (slider.classList.contains('bigSlider')) {
            slider.parentElement.style.overflow = 'scroll';
            touchStartX = event.touches[0].clientX;
            // console.log('touchStartX' + touchStartX)
        }
    });

    slider.addEventListener("touchend", (event) => {
        if (slider.classList.contains('bigSlider')) {
            touchEndX = event.changedTouches[0].clientX;
            // console.log('touchEndX' + touchEndX)
            if (touchEndX < touchStartX && touchStartX - touchEndX > 50) {
                slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft) + 1]);
            } else if (touchEndX > touchStartX && touchEndX - touchStartX > 50) {
                slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft - 1)]);
            } else {
                slideAnimation(positions[currentSlide(slider.parentElement.scrollLeft)]);
            }
        }
    });
});

