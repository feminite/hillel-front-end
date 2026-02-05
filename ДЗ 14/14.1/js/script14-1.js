const track = document.getElementById('track');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

slides.forEach((slide, index) => {
  const dot = document.createElement('div');

  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('active');
  }

  dot.addEventListener('click', () => {
    goToSlide(index);
  });
  
  dotsContainer.append(dot);
});

const dots = document.querySelectorAll('.dot');

function slider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;
  
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  slider();
}

function goToSlide(index) {
  currentIndex = index;
  slider();
}