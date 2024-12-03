// youtube video carousel for index page
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselItems = document.querySelector('.carousel-items'); 
function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');

    carouselItems.style.transition = "transform 1s ease"; 
    carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`; 
}

slides[currentSlide].classList.add('active');

