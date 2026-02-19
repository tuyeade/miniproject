// Typing effect
const text = "Video editor | Developer | Student";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 20);
    }
}

window.onload = typeEffect;

// Download CV function
function downloadCV() {
    alert("CV download started (Add your CV file link here).");
}

// Contact button message
function sendMessage() {

    let name = document.getElementById("userName").value.trim();
    let message = document.getElementById("userMessage").value.trim();

    // Validation
    if (name === "" || message === "") {
        alert("Please enter your name and message.");
        return;
    }

    if (message.length < 5) {
        alert("Message is too short. Please write more details.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent successfully.");

    // Clear fields after sending
    document.getElementById("userName").value = "";
    document.getElementById("userMessage").value = "";
}
