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
