const buttons = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");
const totalSlides = slides.children.length;
const visibleSlides = 3; // Number of visible slides
const slideWidth = 100 / visibleSlides; // Each slide takes up 1/3 of the width

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const activeIndex = [...slides.children].indexOf(slides.querySelector("[data-active]"));
        let newIndex = activeIndex + offset;

        // Handle infinite looping
        if (newIndex < 0) {
            newIndex = totalSlides - visibleSlides; // Go to the last set of slides
        } else if (newIndex >= totalSlides - visibleSlides + 1) {
            newIndex = 0; // Go back to the first set of slides
        }

        // Move slides by adjusting the transform
        slides.style.transform = `translateX(-${newIndex * slideWidth}%)`;

        // Update active slide state
        slides.querySelector("[data-active]").removeAttribute("data-active");
        slides.children[newIndex].setAttribute("data-active", "true");
    });
});

