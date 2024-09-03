document.getElementById('submitBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent actual form submission

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
