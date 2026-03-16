// DNA Helix Generator
function generateDNAHelix() {
  const helix = document.getElementById('dna-helix');
  const nucleotides = ['adenine', 'thymine', 'guanine', 'cytosine'];
  const pairs = { 'adenine': 'thymine', 'guanine': 'cytosine', 'thymine': 'adenine', 'cytosine': 'guanine' };
  const numPairs = 12;

  for (let i = 0; i < numPairs; i++) {
    const basePair = document.createElement('div');
    basePair.className = 'base-pair';

    const yPos = (i / numPairs) * 100;
    basePair.style.top = `${yPos}%`;

    const angle = (i / numPairs) * 360 * 2;
    const xOffset = Math.sin(angle * Math.PI / 180) * 40;
    const zIndex = Math.cos(angle * Math.PI / 180);

    basePair.style.transform = `translateX(calc(-50% + ${xOffset}px))`;
    basePair.style.zIndex = Math.round(zIndex * 10);
    basePair.style.opacity = 0.5 + (zIndex + 1) / 4;

    const leftNuc = document.createElement('div');
    const leftType = nucleotides[i % 4];
    leftNuc.className = `nucleotide ${leftType}`;

    const bond = document.createElement('div');
    bond.className = 'bond';

    const rightNuc = document.createElement('div');
    rightNuc.className = `nucleotide ${pairs[leftType]}`;

    basePair.appendChild(leftNuc);
    basePair.appendChild(bond);
    basePair.appendChild(rightNuc);
    helix.appendChild(basePair);
  }
}

// Carousel - Infinite Scroll
const carouselContainer = document.getElementById('carousel-container');
const originalSlides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const dotsContainer = document.getElementById('carousel-dots');

let currentIndex = 0;
let isTransitioning = false;
let slides = [];
let autoPlayInterval;

function isMobile() {
  return window.innerWidth <= 768;
}

function getSlideWidth() {
  return isMobile() ? 100 : 50;
}

function getVisibleSlides() {
  return isMobile() ? 1 : 2;
}

// Setup Carousel with Clones
function setupCarousel() {
  // Clear existing content to avoid duplicate clones on resize
  carouselContainer.innerHTML = '';

  // Re-add original slides
  originalSlides.forEach(slide => {
    carouselContainer.appendChild(slide.cloneNode(true));
  });

  const slidesToClone = getVisibleSlides();
  const allSlides = carouselContainer.children;

  // Clone last slides and prepend
  for (let i = 0; i < slidesToClone; i++) {
    const clone = allSlides[allSlides.length - 1 - i].cloneNode(true);
    clone.classList.add('clone');
    carouselContainer.insertBefore(clone, carouselContainer.firstChild);
  }

  // Clone first slides and append
  for (let i = 0; i < slidesToClone; i++) {
    const clone = originalSlides[i].cloneNode(true);
    clone.classList.add('clone');
    carouselContainer.appendChild(clone);
  }

  slides = document.querySelectorAll('.carousel-slide');

  // Set initial position (offset by prepended clones)
  currentIndex = slidesToClone;
  updateCarousel(false);
  createDots();
  updateDots();
}

// Create dots for original slides only
function createDots() {
  dotsContainer.innerHTML = '';
  originalSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    dot.addEventListener('click', () => {
      if (isTransitioning) return;
      // Calculate target index accounting for clones
      const slidesToClone = getVisibleSlides();
      currentIndex = i + slidesToClone;
      updateCarousel();
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  const slidesToClone = getVisibleSlides();
  // Calculate "real" index (0 to totalSlides-1)
  let realIndex = currentIndex - slidesToClone;

  // Handle boundary cases for dots
  if (realIndex < 0) realIndex = originalSlides.length - 1;
  if (realIndex >= originalSlides.length) realIndex = 0;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === realIndex);
  });
}

function updateCarousel(animate = true) {
  const slideWidth = getSlideWidth();
  if (!animate) {
    carouselContainer.style.transition = 'none';
  } else {
    carouselContainer.style.transition = 'transform 0.5s ease-in-out';
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  updateDots();
}

function nextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  updateCarousel();

  const slidesToClone = getVisibleSlides();
  const totalSlides = slides.length;

  // If we reached the end (first clone set), jump back to start
  if (currentIndex >= totalSlides - slidesToClone) {
    setTimeout(() => {
      carouselContainer.style.transition = 'none';
      currentIndex = slidesToClone; // Jump to real first slide
      updateCarousel(false);
      isTransitioning = false;
    }, 500);
  } else {
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

function prevSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex--;
  updateCarousel();

  const slidesToClone = getVisibleSlides();

  // If we reached the start (last clone set), jump to end
  if (currentIndex < slidesToClone) {
    setTimeout(() => {
      carouselContainer.style.transition = 'none';
      currentIndex = slides.length - (2 * slidesToClone); // Jump to real last slide
      updateCarousel(false);
      isTransitioning = false;
    }, 500);
  } else {
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(nextSlide, 6000);
}

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    setupCarousel();
  }, 150);
});

// Initial Setup
setupCarousel();

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoPlay();
});

autoPlayInterval = setInterval(nextSlide, 6000);

// Mobile Menu
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const icon = mobileToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileToggle.querySelector('i').classList.add('fa-bars');
    mobileToggle.querySelector('i').classList.remove('fa-times');
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Active Nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Theme Toggle
const themeCheckbox = document.getElementById('theme-checkbox');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  htmlElement.setAttribute('data-theme', 'light');
  themeCheckbox.checked = true;
}

themeCheckbox.addEventListener('change', () => {
  if (themeCheckbox.checked) {
    htmlElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  generateDNAHelix();


  // Reveal on Scroll Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});
