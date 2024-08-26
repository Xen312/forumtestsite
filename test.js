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
