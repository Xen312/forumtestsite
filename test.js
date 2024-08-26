function slideInOnScroll() {
    const slideElements = document.querySelectorAll('.slide-in');

    slideElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', slideInOnScroll);

// Trigger the function on page load as well
slideInOnScroll();
