// Matrix Background Effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";
    
    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, y * fontSize);
        
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
    });

    requestAnimationFrame(drawMatrix);
}

drawMatrix();

// Typing Effect for Intro Text
const typingText = document.getElementById("typing-text");
const message = "> Cutting-edge web solutions with a futuristic touch.";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

window.onload = () => {
    typeWriter();

    // Fade-in effect for services
    const services = document.querySelectorAll(".service");
    services.forEach((service, index) => {
        setTimeout(() => {
            service.classList.add("visible");
        }, index * 300);
    });
};


// Hacker Glitch Effect for "SERVICES"
const glitchText = document.getElementById("glitch-text");
const glitchVariants = ["S3RV1CES", "5ERvICES", "S3RVICE5", "SERV1C3S", "S3RVICES", "SERVICES"];
let glitchIndex = 0;

function glitchEffect() {
    glitchText.innerText = glitchVariants[glitchIndex];
    glitchIndex = (glitchIndex + 1) % glitchVariants.length;
}

setInterval(glitchEffect, 150); // Faster glitch effect
setInterval(() => { glitchIndex = 0; }, 10000); // Reset every 10s