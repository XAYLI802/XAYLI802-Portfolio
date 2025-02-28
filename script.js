const langs = [
  "Hello World",
  "مرحبا بالعالم",
  "Salam Dünya",
  "Прывітанне Сусвет",
  "Zdravstvuyte, mir",
  "こんにちは世界",
  "안녕하세요 월드",
  "你好，世界",
  "Bonjour le monde",
  "Hola Mundo"
];

let charSize = 18;
let fallRate = charSize / 2;
let streams = [];

class Char {
  constructor(value, x, y, speed) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw() {
    const flick = Math.random() * 100;
    if (flick < 10) {
      fill(120, 30, 100);
      text(Math.round(Math.random() * 9), this.x, this.y);
    } else {
      text(this.value, this.x, this.y);
    }

    this.y = this.y > height ? 0 : this.y + this.speed;
  }
}

class Stream {
  constructor(text, x) {
    const y = Math.random() * text.length * 4;
    const speed = Math.random() * 8 + 2;
    this.chars = [];

    for (let i = text.length; i >= 0; i--) {
      this.chars.push(new Char(text[i], x, (y + text.length - i) * charSize, speed));
    }
  }

  draw() {
    fill(120, 100, 100);
    this.chars.forEach((c, i) => {
      const lit = Math.random() * 100;
      if (lit < 30) {
        if (i === this.chars.length - 1) {
          fill(120, 30, 100);
        } else {
          fill(120, 100, 90);
        }
      }
      c.draw();
    });
  }
}

function createStreams() {
  for (let i = 0; i < width; i += charSize) {
    streams.push(new Stream(langs[Math.floor(Math.random() * langs.length)], i));
  }
}

function reset() {
  streams = [];
  createStreams();
}

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.id("matrixCanvas");
  reset();
  frameRate(60);
  colorMode(HSB);
  noStroke();
  textSize(charSize);
  textFont("monospace");
  background(0);
}

function draw() {
  background(0, 0.4);
  streams.forEach((s) => s.draw());
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(0);
  reset();
}

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.id("matrixCanvas");
    canvas.style("position", "fixed");
    canvas.style("top", "0");
    canvas.style("left", "0");
    canvas.style("z-index", "-1");
    reset();
    frameRate(60);
    colorMode(HSB);
    noStroke();
    textSize(charSize);
    textFont("monospace");
    background(0);
}


document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("glitch-text");
    const originalText = "X A Y L I";
    let hackedText = "";
    let index = 0;
    
    function hackEffect() {
        if (index < originalText.length) {
            hackedText += originalText[index];
            textElement.innerHTML = hackedText + "_";
            index++;
            setTimeout(hackEffect, Math.random() * 200);
        } else {
            textElement.innerHTML = hackedText;
        }
    }

    setTimeout(hackEffect, 500);
});