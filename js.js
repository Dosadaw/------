

const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  video1.addEventListener('ended', () => {
    video1.style.display = 'none';
    video2.style.opacity = '1'; // Делаем второе видео видимым
    video2.play();
  });

  video2.addEventListener('ended', () => {
    video2.play(); // Зацикливание второго видео
  });
