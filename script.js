const snowContainer = document.querySelector('.snow-container');

// Массив SVG снежинок
const snowflakes = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 0l1.714 5.657 5.657-1.714-1.714 5.657 5.657 1.714-5.657 1.714 1.714 5.657-5.657-1.714-1.714 5.657-1.714-5.657-5.657 1.714 1.714-5.657-5.657-1.714 5.657-1.714-1.714-5.657 5.657 1.714z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 0l1.714 5.657 5.657-1.714-1.714 5.657 5.657 1.714-5.657 1.714 1.714 5.657-5.657-1.714-1.714 5.657-1.714-5.657-5.657 1.714 1.714-5.657-5.657-1.714 5.657-1.714-1.714-5.657 5.657 1.714z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 0l1.714 5.657 5.657-1.714-1.714 5.657 5.657 1.714-5.657 1.714 1.714 5.657-5.657-1.714-1.714 5.657-1.714-5.657-5.657 1.714 1.714-5.657-5.657-1.714 5.657-1.714-1.714-5.657 5.657 1.714z"/></svg>',
  // Добавьте еще SVG по желанию...
];

// Функция для создания снежинки
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
  
  // Случайное положение снежинки по ширине экрана
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 3 + 's'; // Время падения (3–6 секунд)
  snowflake.style.opacity = Math.random(); // Прозрачность
  snowflake.style.transform = `scale(${Math.random() * 0.7 + 0.3})`; // Размер снежинки
  
  snowContainer.appendChild(snowflake);

  // Удаляем снежинку после завершения анимации
  setTimeout(() => {
    snowflake.remove();
  }, 6000);
}

// Генерация снежинок каждые 300 мс
setInterval(createSnowflake, 300);



// Найти аудио-элемент
const backgroundAudio = document.getElementById('background-audio');

// Установить громкость
backgroundAudio.volume = 0.25;

// Обработчик на весь экран по клику
document.body.addEventListener('click', () => {
  // Включить или выключить музыку в зависимости от текущего состояния
  if (backgroundAudio.paused) {
    backgroundAudio.play();
  } else {
    backgroundAudio.pause();
  }
});

