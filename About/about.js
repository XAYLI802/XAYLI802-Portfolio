// Matrix Effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Fade-in Effect for Sections
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        el.style.opacity = "1";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector(".typing-animation");
    if (typingText) {
        typingText.style.width = typingText.scrollWidth + "px"; // Dynamically adjust width
    }
});