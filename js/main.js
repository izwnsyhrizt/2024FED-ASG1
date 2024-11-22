let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselItems = document.querySelector('.carousel-items'); // Get the carousel container

function moveSlide(direction) {
    currentSlide += direction;

    // Loop back to the first slide if we reach the last
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Remove active class from all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Add active class to the current slide
    slides[currentSlide].classList.add('active');

    // Move the carousel to the current slide
    carouselItems.style.transition = "transform 1s ease"; // Smooth transition
    carouselItems.style.transform = `translateX(-${currentSlide * 100}%)`; // Move the carousel to the current slide
}

// Initialize the first slide as active
slides[currentSlide].classList.add('active');