const canvas = document.getElementById("snowfall");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

// Создаем снежинку
class Snowflake {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 3 + 1; // Размер снежинки
    this.speed = Math.random() * 1 + 0.5; // Скорость падения
    this.wind = Math.random() * 0.5 - 0.25; // Легкий ветер
  }

  update() {
    this.y += this.speed;
    this.x += this.wind;

    // Перезапускаем снежинку сверху, если она упала
    if (this.y > canvas.height) {
      this.y = -this.radius;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#eceff4"; // Светло-серый цвет снежинки
    ctx.fill();
    ctx.closePath();
  }
}

// Создаем массив снежинок
function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    snowflakes.push(new Snowflake());
  }
}

// Анимация снежинок
function animateSnowfall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const snowflake of snowflakes) {
    snowflake.update();
    snowflake.draw();
  }

  requestAnimationFrame(animateSnowfall);
}

// Обновляем размер canvas при изменении окна
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes.length = 0;
  createSnowflakes(150); // Обновляем снежинки
});

// Запуск анимации
createSnowflakes(150); // 150 снежинок
animateSnowfall();
