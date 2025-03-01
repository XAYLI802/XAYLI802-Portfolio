const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 14);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = '14px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.random() * 94);
        const x = i * 14;
        const y = drops[i] * 14;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});