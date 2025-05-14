// HERO SECTION


  // Play and pause video on scroll
  const heroVideo = document.querySelector('.hero-video');
  let lastScrollY = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold && !heroVideo.paused) {
      heroVideo.pause();
    } else if (window.scrollY <= scrollThreshold && heroVideo.paused) {
      heroVideo.play();
    }
    lastScrollY = window.scrollY;
  });

  // Scroll down smooth animation
  const scrollDownButton = document.querySelector('.scroll-down');
  scrollDownButton.addEventListener('click', () => {
    window.scroll({
      top: window.innerHeight, // Scroll to the hero section height
      behavior: 'smooth'
    });
  });

