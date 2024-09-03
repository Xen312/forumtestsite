// Complaint Submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbxtLsmIOylZkx8IdupxEKwkovvbgoDFlO8lgIBXPzPzR7KR2xzekzGw0Kz9ARD-sU3y/exec';
const form = document.getElementById('complaint-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData(form);

    // Send form data to Google Apps Script
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // Clear input values after 2 seconds
                setTimeout(() => {
                    form.reset();
                }, 2000);

                // Optionally show a success message or alert
                alert('Form submitted successfully!');
            } else {
                // Optionally show an error message or alert
                console.error('Error:', data.error);
                alert('Error: ' + data.error);
            }
        })
        .catch(error => {
            // Optionally show an error message or alert
            console.error('Error!', error.message);
            alert('Error: ' + error.message);
        });
});

//Previous Years Questions

document.querySelectorAll('.accordion-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        const content = tab.nextElementSibling;
        
        // Close any other open content
        document.querySelectorAll('.accordion-content.active').forEach(function(openContent) {
            if (openContent !== content) {
                openContent.classList.remove('active');
            }
        });
        
        // Toggle the clicked content
        content.classList.toggle('active');
    });
});

// Tab switching function
function openTab(event, tabId) {
    var i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // Remove active class from all buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the current tab and add active class to the button
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Accordion functionality
var acc = document.getElementsByClassName("accordion-tab");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    }
}

// Function to handle the toggle effect
function toggleGallery(sectionId, buttonClass) {
    document.querySelectorAll(buttonClass).forEach(button => {
        button.addEventListener('click', function() {
            // Get all gallery sections
            const allSections = document.querySelectorAll('.gallery-section');

            // Hide all other sections
            allSections.forEach(section => {
                if (section.id !== sectionId) {
                    section.classList.remove('active');
                    section.style.height = '0';
                }
            });

            // Get the targeted gallery section
            const gallerySection = document.getElementById(sectionId);

            // Toggle the active class for the targeted section
            if (gallerySection.classList.contains('active')) {
                gallerySection.classList.remove('active');
                gallerySection.style.height = '0';
            } else {
                gallerySection.classList.add('active');
                gallerySection.style.height = gallerySection.scrollHeight + 'px';
            }
        });
    });
}

// Initialize the toggle function for each gallery and button pair
toggleGallery('dmu-gallery', '.dmu');
toggleGallery('dmsc-gallery', '.dmsc');
toggleGallery('dmarts-gallery', '.dmarts');
toggleGallery('gp-gallery', '.gp');

// Front Page Slide In

window.addEventListener('load', () => {
    const slideElements = document.querySelectorAll('.slide-in');

    slideElements.forEach(element => {
        element.classList.add('visible');
    });
});


// Scroll Slide

function slideInOnScroll() {
    const slideElements = document.querySelectorAll('.scroll-slide-in');

    slideElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('scroll-visible');
        }
    });
}

window.addEventListener('scroll', slideInOnScroll);

// Trigger the function on page load as well
slideInOnScroll();

// Events Photo Click

function showGallery(galleryId) {
    document.getElementById(galleryId).style.display = 'flex';
}

function hideGallery(galleryId, event) {
    event.stopPropagation(); // Prevents the click event from propagating to the parent
    document.getElementById(galleryId).style.display = 'none';
}

function showFullImage(img) {
    const fullImageView = document.getElementById('fullImageView');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = img.src;
    fullImageView.style.display = 'flex';
}

function hideFullImage() {
    document.getElementById('fullImageView').style.display = 'none';
}

// Logo Slider 

document.addEventListener("DOMContentLoaded", function() {
    let currentLogoIndex = 0;
    const logos = document.querySelectorAll('.logo-container img');
    const totalLogos = logos.length;

    function showNextLogo() {
        logos[currentLogoIndex].classList.remove('active');
        currentLogoIndex = (currentLogoIndex + 1) % totalLogos;
        logos[currentLogoIndex].classList.add('active');
    }

    setInterval(showNextLogo, 3000); // Change logo every 3 seconds
});


// Menu Bar

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.getElementById('submitBtn').addEventListener('click', function(e) {
    var button = this;
    button.classList.add('loading');
    button.innerHTML = '<div class="loader"></div>';

    // Simulate a loading delay of 2 seconds
    setTimeout(function() {
        button.classList.remove('loading');
        button.textContent = 'Submitted';
        button.disabled = true; // Optional: Disable the button after submission
    }, 2000);
});