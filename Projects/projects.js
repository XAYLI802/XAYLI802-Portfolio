// Matrix Background Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const columns = canvas.width / 20;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = "20px monospace";

    drops.forEach((y, index) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = index * 20;
        ctx.fillText(text, x, y * 20);

        if (y * 20 > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }

        drops[index]++;
    });
}

setInterval(drawMatrix, 50);

// Toggle Case Study Content
document.querySelectorAll('.case-study-toggle').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("glitch-projects");
    const originalText = "PROJECT SHOWCASE";

    function hackEffect() {
        let hackedText = "";
        let characters = "!@#$%^&*()_+=-{}[]|:;<>,.?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let index = 0;

        function scramble() {
            if (index < originalText.length) {
                hackedText = originalText
                    .split("")
                    .map((char, i) => (i < index ? char : characters[Math.floor(Math.random() * characters.length)]))
                    .join("");

                textElement.innerHTML = hackedText;
                index++;
                setTimeout(scramble, 100);
            } else {
                textElement.innerHTML = originalText;
            }
        }

        scramble();
    }

    // Run the effect every 30 seconds
    setInterval(hackEffect, 30000);
    hackEffect(); // Run once on page load
});