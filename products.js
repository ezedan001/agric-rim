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













function shuffleVisibleProducts(grid) {
  const visibleCards = Array.from(grid.children).filter(card => card.style.display !== 'none');
  visibleCards.sort(() => Math.random() - 0.5);
  visibleCards.forEach(card => grid.appendChild(card));
}

function filterProducts() {
  const sizeValue = document.getElementById('filter-size').value.toLowerCase();
  const typeValue = document.getElementById('filter-type').value.toLowerCase();
  const grid = document.querySelector('.product-grid');
  const cards = grid.querySelectorAll('.product-card');

  cards.forEach(card => {
    const cardSize = card.dataset.size?.toLowerCase();
    const cardType = card.dataset.type?.toLowerCase();

    const matchesSize = !sizeValue || cardSize === sizeValue;
    const matchesType = !typeValue || cardType === typeValue;

    card.style.display = (matchesSize && matchesType) ? 'block' : 'none';
  });

  shuffleVisibleProducts(grid);
}

// Shuffle on first load
window.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.product-grid');
  shuffleVisibleProducts(grid);
});












function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function getRandomMessage(productName, qty) {
  const messages = [
    `I'm interested in buying ${qty} pcs of ${productName}.`,
    `Please send me your best price for ${qty} pcs of ${productName}.`,
    `I need ${qty} units of ${productName}. Kindly reply soon.`,
    `Looking to purchase ${qty} pcs of ${productName}.`,
    `Can you confirm availability and pricing for ${qty} of ${productName}?`
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

async function fetchCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country_name || "your country";
  } catch {
    return "your country";
  }
}

async function sendWhatsApp(button) {
  const card = button.closest('.product-card');
  const name = card.querySelector('h3').innerText;
  const qty = card.querySelector('.qty-input').value || 1;
  const greeting = getGreeting();
  const country = await fetchCountry();
  const msg = getRandomMessage(name, qty);

  const finalMessage = `${greeting} 👋

${msg}

🌍 I'm messaging you from ${country}.

✍️ My Name: 
🏢 Company Name: 
📞 Phone: 
📧 Email: 

Our CHENHUA AUTO team will reply as soon as possible.`;

  const phone = "2348135584643"; // Replace with your WhatsApp number
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
  window.open(url, '_blank');
}

async function sendEmail(button) {
  const card = button.closest('.product-card');
  const name = card.querySelector('h3').innerText;
  const qty = card.querySelector('.qty-input').value || 1;
  const greeting = getGreeting();
  const country = await fetchCountry();
  const msg = getRandomMessage(name, qty);

  const fullBody = `${greeting},

${msg}

🌍 I am contacting you from ${country}.

✍️ My Name: 
🏢 Company Name: 
📞 Phone: 
📧 Email: 

Looking forward to your reply.

CHENHUA AUTO`;

  const subject = `Inquiry: ${name}`;
  const email = "ezesomtochukwu588@gmail.com"; // Replace with your real email

  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  window.open(gmailURL, '_blank');
}











document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.product-img img');

  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });

    // Optional fallback if cached
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
});


