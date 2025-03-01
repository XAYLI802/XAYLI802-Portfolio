// Back Button Function - Always on Top
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".back-button");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });

        // Ensure button stays on top
        backButton.style.position = "fixed";
        backButton.style.top = "20px";
        backButton.style.left = "20px";
        backButton.style.zIndex = "9999";
    }
});

// Typewriter Effect for Subtitle
function typeWriterEffect(element, text, speed = 50) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    element.innerHTML = ""; // Clear before starting
    type();
}

document.addEventListener("DOMContentLoaded", function () {
    const subtitle = document.querySelector(".subtitle");
    if (subtitle) {
        typeWriterEffect(subtitle, "Cutting-edge web solutions with a futuristic touch.");
    }
});

// Interactive Glow Effect on Service Boxes
document.querySelectorAll(".service-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.boxShadow = "0 0 15px 5px #0f0";
    });
    box.addEventListener("mouseleave", () => {
        box.style.boxShadow = "0 0 10px 2px #0f0";
    });
});

// Smooth Scroll Effect for Internal Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Matrix Background Effect (Restored)
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

// Matrix animation
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Adjust canvas size on resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Run Matrix animation
setInterval(drawMatrix, 50);