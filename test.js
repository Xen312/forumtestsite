// JavaScript for toggling the nav menu
document.getElementById('menu-btn').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
    
    // Toggle the icon between menu and close (cross)
    if (navLinks.classList.contains('show')) {
        this.innerHTML = '✖'; // Cross icon
    } else {
        this.innerHTML = '☰'; // Menu icon
    }
});
