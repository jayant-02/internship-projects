/* ====================================================
   CAFÉ MUNIR — Main JavaScript
   ==================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------
     PAGE LOADER
  -------------------------------------------------- */
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      // Trigger hero entrance
      const hero = document.getElementById('hero');
      if (hero) hero.classList.add('loaded');
    }, 1500);
  }
  document.body.style.overflow = 'hidden';

  /* --------------------------------------------------
     NAVIGATION — SCROLL EFFECT
  -------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollTop = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;

    // Nav scroll class
    if (y > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    if (y > 400) {
      scrollTop?.classList.add('visible');
    } else {
      scrollTop?.classList.remove('visible');
    }

    // Active nav link
    updateActiveNavLink();

    // Parallax hero
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg) {
      heroBg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
    }
  }, { passive: true });

  scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* --------------------------------------------------
     ACTIVE NAV LINK (scroll spy)
  -------------------------------------------------- */
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  /* --------------------------------------------------
     SMOOTH SCROLL for nav links
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile menu
      closeMobileMenu();
    });
  });

  /* --------------------------------------------------
     MOBILE MENU
  -------------------------------------------------- */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');

  function closeMobileMenu() {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu?.addEventListener('click', e => {
    if (e.target === mobileMenu) closeMobileMenu();
  });

  /* --------------------------------------------------
     SCROLL REVEAL (Intersection Observer)
  -------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  /* --------------------------------------------------
     ANIMATED COUNTERS (About stats)
  -------------------------------------------------- */
  function animateCounter(el, target, duration = 1800, suffix = '') {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const counterEls = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, 1800, suffix);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => counterObserver.observe(el));

  /* --------------------------------------------------
     MENU TABS
  -------------------------------------------------- */
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuPanels = document.querySelectorAll('.menu-panel');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      menuTabs.forEach(t => t.classList.remove('active'));
      menuPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.querySelector(`.menu-panel[data-panel="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  /* --------------------------------------------------
     GALLERY LIGHTBOX
  -------------------------------------------------- */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');
  let currentGalleryIndex = 0;

  const galleryImages = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt,
    label: item.dataset.label || '',
  }));

  function openLightbox(index) {
    currentGalleryIndex = index;
    const img = galleryImages[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    openLightbox(currentGalleryIndex);
  }

  function showPrev() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentGalleryIndex);
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', showPrev);
  lightboxNext?.addEventListener('click', showNext);

  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  /* --------------------------------------------------
     TESTIMONIALS CAROUSEL
  -------------------------------------------------- */
  const track = document.querySelector('.testimonials-track');
  const cards = document.querySelectorAll('.testimonial-card');
  const dotsContainer = document.querySelector('.testimonials-dots');
  const prevBtn = document.querySelector('.testimonials-btn--prev');
  const nextBtn = document.querySelector('.testimonials-btn--next');

  let currentSlide = 0;
  let autoSlide;
  let visibleCards = getVisibleCards();

  function getVisibleCards() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function totalSlides() {
    return Math.max(0, cards.length - visibleCards);
  }

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const total = totalSlides() + 1;
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'testimonials-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    document.querySelectorAll('.testimonials-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = Math.max(0, Math.min(index, totalSlides()));
    if (!track) return;

    const cardWidth = cards[0]?.offsetWidth || 0;
    const gap = 24; // --space-md in px
    track.style.transform = `translateX(-${currentSlide * (cardWidth + gap)}px)`;
    updateDots();
  }

  function nextSlide() {
    goToSlide(currentSlide >= totalSlides() ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide <= 0 ? totalSlides() : currentSlide - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(nextSlide, 4500);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  createDots();
  startAutoSlide();

  nextBtn?.addEventListener('click', () => { nextSlide(); startAutoSlide(); });
  prevBtn?.addEventListener('click', () => { prevSlide(); startAutoSlide(); });

  track?.addEventListener('mouseenter', stopAutoSlide);
  track?.addEventListener('mouseleave', startAutoSlide);

  // Touch swipe for carousel
  let touchStartX = 0;
  track?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track?.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      delta > 0 ? nextSlide() : prevSlide();
      startAutoSlide();
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    visibleCards = getVisibleCards();
    currentSlide = 0;
    createDots();
    goToSlide(0);
  });

  /* --------------------------------------------------
     RESERVATION FORM
  -------------------------------------------------- */
  const reservationForm = document.querySelector('.reservation-form form');
  const formSuccess = document.querySelector('.form-success');

  reservationForm?.addEventListener('submit', e => {
    e.preventDefault();

    const inputs = reservationForm.querySelectorAll('[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = 'rgba(196, 96, 58, 0.6)';
        valid = false;
        setTimeout(() => { input.style.borderColor = ''; }, 2500);
      }
    });

    if (!valid) return;

    // Simulate form submission
    const submitBtn = reservationForm.querySelector('.form-submit');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      reservationForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.classList.add('visible');
      }
    }, 1200);
  });

  /* --------------------------------------------------
     NEWSLETTER FORM
  -------------------------------------------------- */
  const newsletterForm = document.querySelector('.newsletter-form');
  newsletterForm?.addEventListener('submit', e => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.newsletter-input');
    const btn = newsletterForm.querySelector('.newsletter-btn');
    if (!input.value.includes('@')) {
      input.style.borderColor = 'rgba(196, 96, 58, 0.6)';
      setTimeout(() => { input.style.borderColor = ''; }, 2000);
      return;
    }
    btn.textContent = '✓ Subscribed!';
    input.value = '';
    btn.style.background = '#6dc98a';
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
    }, 3000);
  });

  /* --------------------------------------------------
     MARQUEE — duplicate items for seamless loop
  -------------------------------------------------- */
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;
  }

  /* --------------------------------------------------
     HERO SCROLL BUTTON
  -------------------------------------------------- */
  const heroScroll = document.querySelector('.hero-scroll');
  heroScroll?.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

});
