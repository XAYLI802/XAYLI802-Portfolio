// Matrix Background Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00FF00';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');
    let delay = 200;

    services.forEach((service, index) => {
        setTimeout(() => {
            service.classList.add('fade-in');
        }, delay * (index + 1));
    });

    // Trigger glitch effect every 10 seconds
    const glitchText = document.getElementById('glitch-text');
    setInterval(() => {
        glitchText.classList.add('glitch-active');
        setTimeout(() => {
            glitchText.classList.remove('glitch-active');
        }, 500);
    }, 10000);
});