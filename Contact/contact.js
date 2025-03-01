document.addEventListener("DOMContentLoaded", function () {
    /* ========== USER ID & MESSAGE COUNT TRACKING ========== */
    function getUserID() {
        let userID = localStorage.getItem("userID");
        if (!userID) {
            userID = `User #${Math.floor(1000 + Math.random() * 9000)}`;
            localStorage.setItem("userID", userID);
        }
        return userID;
    }

    function incrementMessageCount() {
        let messageCount = parseInt(localStorage.getItem("messageCount") || "0");
        messageCount++;
        localStorage.setItem("messageCount", messageCount);
        return messageCount;
    }

    const userID = getUserID();
    let messageCount = parseInt(localStorage.getItem("messageCount") || "0");

    /* ========== BASE64-ENCODED WEBHOOK (SECURELY SPLIT) ========== */
    const part1 = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv";
const part2 = "MTM0NTAwODAyNDUwNjYwMTUyMy9lUGRRUG15U0gzejQ2";
const part3 = "eFlxWU92VHZEREFVZ1A3Y1lvQW43OExIVU4tTm0xMkNPeE";
const part4 = "5oMHFfODZiSGk3QlFoVXIxZHd0WQ==";

const webhookURL = atob(part1 + part2 + part3 + part4);

    /* ========== CONTACT FORM VALIDATION & DISCORD WEBHOOK ========== */
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (event) {
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

        if (!isValidMessage(message)) {
            alert("Message must be at least 15 characters long and cannot contain URLs.");
            return;
        }

        messageCount = incrementMessageCount();

        await sendToDiscord(userID, messageCount, name, email, message);
        alert("Message sent successfully!");
        form.reset();
    });

    function isValidName(name) {
        return /^[A-Za-z]{3,}$/.test(name);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidMessage(message) {
        if (message.length < 15) return false;
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return !urlPattern.test(message);
    }

    async function sendToDiscord(userID, messageCount, name, email, message) {
        let ipData = await fetch("https://api64.ipify.org?format=json").then(res => res.json());
        let locationData = await fetch(`https://ip-api.com/json/${ipData.ip}`).then(res => res.json());
        let userAgent = navigator.userAgent;

        const embedData = {
            username: "📩 Portfolio Messages",
            avatar_url: "https://i.imgur.com/AfFp7pu.png",
            embeds: [
                {
                    title: "📥 **New Contact Form Submission**",
                    color: 0x00ff00,
                    fields: [
                        { name: "👤 **User ID:**", value: `\`${userID}\``, inline: true },
                        { name: "📊 **Messages Sent:**", value: `\`${messageCount}\``, inline: true },
                        { name: "📛 **Name:**", value: `\`${name}\``, inline: true },
                        { name: "📧 **Email:**", value: `\`${email}\`` },
                        { name: "📝 **Message:**", value: `\`\`\`${message}\`\`\`` },
                        { name: "🌍 **Location:**", value: `\`${locationData.country}, ${locationData.regionName}\``, inline: true },
                        { name: "📡 **IP Address:**", value: `\`${ipData.ip}\``, inline: true },
                        { name: "🖥 **User-Agent:**", value: `\`${userAgent}\`` },
                        { name: "⏳ **Sent At:**", value: `\`${new Date().toLocaleString()}\``, inline: true }
                    ],
                    footer: {
                        text: "📌 Sent via portfolio contact form",
                    },
                },
            ],
        };

        fetch(webhookURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(embedData),
        })
        .then(response => console.log("Message sent."))
        .catch(error => console.error("Error sending Message:", error));
    }

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
    hackEffect();

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
    revealOnScroll();

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
});