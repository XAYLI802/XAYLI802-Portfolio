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

document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    services.forEach((service, index) => {
        service.style.opacity = "0";
        service.style.transform = "translateY(50px)";

        setTimeout(() => {
            service.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            service.style.opacity = "1";
            service.style.transform = "translateY(0)";
        }, index * 300); // Delay each service by 300ms
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("glitch-text");
    const originalText = "SERVICES";

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

    // Run the effect every minute
    setInterval(hackEffect, 10000);
    hackEffect(); // Run once on load
});



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

    // Run the function on scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Check on page load
});
