function toggleVisibility(containerClass) {
    const container = document.querySelector(`.${containerClass} .pdf-list`);
    const hiddenItems = container.querySelectorAll('.hidden');

    const button = container.parentElement.querySelector('.see-more');
    
    // Check if the items are currently hidden or visible
    if (button.textContent === 'See more') {
        hiddenItems.forEach(item => item.style.display = 'flex'); // Show hidden items
        button.textContent = 'See less';
        container.style.maxHeight = container.scrollHeight + 'px'; // Expand the container
    } else {
        hiddenItems.forEach(item => item.style.display = 'none'); // Hide the items again
        button.textContent = 'See more';
        container.style.maxHeight = '200px'; // Return to original height
    }
}