document.addEventListener("DOMContentLoaded", function() {
    // Logo Slider Logic
    let currentLogoIndex = 0;
    const logos = document.querySelectorAll('.logo-slider img');
    const totalLogos = logos.length;

    function showNextLogo() {
        logos[currentLogoIndex].classList.remove('active');
        currentLogoIndex = (currentLogoIndex + 1) % totalLogos;
        logos[currentLogoIndex].classList.add('active');
    }

    setInterval(showNextLogo, 3000); // Change logo every 3 seconds
});
