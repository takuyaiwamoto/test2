// Countdown Timer
const eventDate = new Date('2025-01-24T18:00:00+09:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = '<div class="time-unit"><span>LIVE NOW</span></div>';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.info-card, .ticket-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Sparkle Generator
function createSparkle() {
  const hero = document.querySelector('.hero');
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 1.5 + 0.5;
  const duration = Math.random() * 1 + 1;
  const delay = Math.random() * 2;

  sparkle.style.left = `${x}%`;
  sparkle.style.top = `${y}%`;
  sparkle.style.transform = `scale(${size})`;
  sparkle.style.animation = `sparkle ${duration}s linear ${delay}s infinite`;

  hero.appendChild(sparkle);

  // Remove after animation to prevent buildup (optional, but good for performance if not infinite)
  // For infinite, we just leave them or limit the count.
  // Let's limit to 50 sparkles.
  if (hero.querySelectorAll('.sparkle').length > 50) {
    hero.removeChild(hero.querySelector('.sparkle'));
  }
}

setInterval(createSparkle, 200);

