const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenuBtn = document.getElementById('closeMobileMenu');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}

// Event listeners
hamburgerBtn.addEventListener('click', openMobileMenu);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

// Optional: close menu when clicking outside menu on mobile (not required, but user friendly)
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('active') &&
    !mobileMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});



// Elements
const modeToggle = document.getElementById('modeToggle');
const mobileModeToggle = document.getElementById('mobileModeToggle');

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});



// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    modeToggle.textContent = '☀️'; // change icon to sun
    if (mobileModeToggle) mobileModeToggle.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    modeToggle.textContent = '🌓'; // moon icon
    if (mobileModeToggle) mobileModeToggle.textContent = '🌓 Dark Mode';
  }
}

// Event listeners
if (modeToggle) modeToggle.addEventListener('click', toggleDarkMode);
if (mobileModeToggle) mobileModeToggle.addEventListener('click', toggleDarkMode);








// hero section

  document.querySelector('.scroll-down').addEventListener('click',function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });



// product gallery
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
const slideWidth = slides[0].getBoundingClientRect().width + 20; // include margin-right

// Move to slide
function moveToSlide(index) {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
  checkButtons();
}

// Check if buttons should be disabled
function checkButtons() {
  if (currentIndex === 0) {
    prevButton.disabled = true;
    prevButton.style.opacity = 0.4;
  } else {
    prevButton.disabled = false;
    prevButton.style.opacity = 0.9;
  }
  
  if (currentIndex >= slides.length - visibleSlides()) {
    nextButton.disabled = true;
    nextButton.style.opacity = 0.4;
  } else {
    nextButton.disabled = false;
    nextButton.style.opacity = 0.9;
  }
}

// Calculate visible slides based on viewport width
function visibleSlides() {
  const width = window.innerWidth;
  if (width <= 480) return 1;
  if (width <= 768) return 2;
  return 3;
}

// Button Event Listeners
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    moveToSlide(currentIndex - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - visibleSlides()) {
    moveToSlide(currentIndex + 1);
  }
});

// On window resize, reset position
window.addEventListener('resize', () => {
  moveToSlide(0);
});

// Initialize
moveToSlide(0);

const dotsContainer = document.querySelector('.carousel-dots');

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  if(index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);

  dot.addEventListener('click', () => {
    moveToSlide(index);
  });
});

function updateDots(index) {
  const dots = dotsContainer.querySelectorAll('button');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Update dots on slide move
function moveToSlide(index) {
  track.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
  checkButtons();
  updateDots(index);
}

let startX = 0;
let isDragging = false;

track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener('touchmove', e => {
  if (!isDragging) return;
  let currentX = e.touches[0].clientX;
  let diff = startX - currentX;

  if (diff > 50) {  // swipe left
    if (currentIndex < slides.length - visibleSlides()) {
      moveToSlide(currentIndex + 1);
      isDragging = false;
    }
  } else if (diff < -50) {  // swipe right
    if (currentIndex > 0) {
      moveToSlide(currentIndex - 1);
      isDragging = false;
    }
  }
});

track.addEventListener('touchend', () => {
  isDragging = false;
});





// <!-- your FAQ HTML content here -->








