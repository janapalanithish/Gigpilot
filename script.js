console.log("GigPilot Script Loaded");

// Navigation Helper
function navigateTo(page) {
    console.log("Navigating to: " + page);
    window.location.href = page;
}

// Simple Alert for Demo Features
function showDemoAlert(feature) {
    alert(feature + " is available in the Pro Plan!");
}