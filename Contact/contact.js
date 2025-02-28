document.addEventListener("DOMContentLoaded", function () {
    /* ========== GLITCH EFFECT ========== */
    const textElement = document.getElementById("glitch-contact");
    const originalText = "CONTACT";

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

    setInterval(hackEffect, 10000);
    hackEffect(); // Run once on load

    /* ========== REVEAL ON SCROLL ========== */
    const contactElements = document.querySelectorAll(".contact-info, .contact-form");

    function revealOnScroll() {
        contactElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load

    /* ========== MATRIX BACKGROUND EFFECT ========== */
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const matrixChars = "01XAYLI$#@!%&";
    const fontSize = 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff00";
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

    setInterval(drawMatrix, 50);

    /* ========== CONTACT FORM VALIDATION & DISCORD WEBHOOK ========== */
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!isValidName(name)) {
            alert("Name must be at least 3 characters long and contain only letters.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Enter a valid email (example@gmail.com).");
            return;
        }

        if (message.length < 15) {
            alert("Message must be at least 15 characters long.");
            return;
        }

        sendToDiscord(name, email, message);
        alert("Message sent successfully!");
        form.reset();
    });

    function isValidName(name) {
        return /^[A-Za-z]{3,}$/.test(name);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function sendToDiscord(name, email, message) {
        const webhookURL = "https://discord.com/api/webhooks/1345008024506601523/ePdQPmySH3z46xYqYOvTvDDAUgP7cYoAn78LHUN-Nm12COxNh0q_86bHi7BQhUr1dwtY";

        const data = {
            content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
        };

        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(response => console.log("Message sent to Discord"))
        .catch(error => console.error("Error sending to Discord:", error));
    }
});