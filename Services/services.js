const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const rain = Array(columns).fill(1);

const drawMatrix = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = "18px monospace";

    rain.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = index * 20;
        ctx.fillText(text, x, y);
        rain[index] = y > canvas.height || Math.random() > 0.98 ? 0 : y + 20;
    });
};

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

/* Scroll Reveal Effect */
document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    function revealOnScroll() {
        services.forEach((service) => {
            const rect = service.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                service.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});