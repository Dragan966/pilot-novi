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
        console.log('test' + test);
        return test.length;
    }

    

    function slideAnimation(position) {
        const startPosition = slider.parentElement.scrollLeft;
        const distance = position - startPosition;
        const duration = 500;
        let start = null;
      
        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const ease = (progress / duration) ** 2; // ease-in-out
          const scrollLeft = startPosition + distance * ease;
          if ((distance > 0 && scrollLeft >= position) || (distance < 0 && scrollLeft <= position)) {
            slider.parentElement.scrollLeft = position;
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
        const currentIndex = currentSlide();
        if (currentIndex > 0) {
            
            console.log('scrolleft' + slider.parentElement.scrollLeft)
            const prevSlide = slider.parentElement.scrollLeft - slider.parentElement.clientWidth;
            slideAnimation(prevSlide);
            console.log('prev' + prevSlide)
        }
    });

    // rightBtn 
    slider.parentElement.nextElementSibling.childNodes[3].addEventListener('click', () => {
        slideAnimation(positions[currentSlide()]);
    });
});

