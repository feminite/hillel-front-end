let currentIndex = 0;
const track = document.getElementById('track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateButtons() {
  prevBtn.disabled = (currentIndex === 0);
  
  nextBtn.disabled = (currentIndex === slides.length - 1);
}

function moveSlide(direction) {
  const nextIndex = currentIndex + direction;

  if (nextIndex >= 0 && nextIndex < slides.length) {
    currentIndex = nextIndex;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
  }
}