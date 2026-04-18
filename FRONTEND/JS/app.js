document.querySelectorAll('.card').forEach(card => {
  const canvas = card.querySelector('canvas.particles');

  if (!canvas) return; //  evita errores

  const ctx = canvas.getContext('2d');
  const color = card.dataset.color || "0,200,255";

  let particles = [];
  let animId = null;
  let active = false;

  function resize() {
    canvas.width  = card.offsetWidth;
    canvas.height = card.offsetHeight;
  }

  resize(); // IMPORTANTE

  function spawn() {
    const x = Math.random() * canvas.width;
    particles.push({
      x, y: canvas.height + 1,
      vx: (Math.random() - 0.1) * 0.8,
      vy: -(Math.random() * 1.4 + 0.6),
      r: Math.random() * 2.0 + 0.8,
      alpha: Math.random() * 0.7 + 0.3,
      life: 1
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (active && Math.random() < 0.5) spawn();

    particles = particles.filter(p => p.life > 0);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.01;
      p.alpha = p.life * 0.8;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${p.alpha})`;
      ctx.fill();
    });

    if (active || particles.length > 0) {
      animId = requestAnimationFrame(loop);
    } else {
      animId = null;
    }
  }

  card.addEventListener('mouseenter', () => {
    resize();
    active = true;
    if (!animId) loop();
  });

  card.addEventListener('mouseleave', () => {
    active = false;
  });

  card.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;

      particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        r: Math.random() * 3 + 1,
        alpha: 1,
        life: 1
      });
    }

    if (!animId) {
      resize();
      loop();
    }
  });
});

function irEnlaces(url){
    window.open(url, "_blank")
}


/* ============================================================
   APP.JS — Lógica página principal KLYDY Technology
   Depende de: Swiper 11 (cargado antes en el HTML)
   ============================================================ */
 
'use strict';
 
/* ────────────────────────────────────────────────────────────
   SWIPER — Carrusel de categorías
   Siempre activo con autoplay · loop infinito
   Slides visibles según breakpoint
──────────────────────────────────────────────────────────── */
 
const categoriesSwiper = new Swiper('.categories-swiper', {
 
  /* ── Comportamiento general ── */
  loop: true,
  grabCursor: true,
  centeredSlides: false,
 
  /* ── Autoplay siempre activo ── */
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,   /* sigue después de que el usuario toca */
    pauseOnMouseEnter: true,       /* pausa al hacer hover */
  },
 
  /* ── Velocidad de transición (ms) ── */
  speed: 600,
 
  /* ── Espacio entre slides ── */
  spaceBetween: 24,
 
  /* ── Slides visibles por breakpoint ── */
  slidesPerView: 2,                /* móvil: 2 círculos */
 
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 32,
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 32,
    },
  },
 
  /* ── Flechas de navegación ── */
  navigation: {
    prevEl: '.categories-swiper__prev',
    nextEl: '.categories-swiper__next',
  },
 
  /* ── Accesibilidad ── */
  a11y: {
    prevSlideMessage: 'Categoría anterior',
    nextSlideMessage: 'Categoría siguiente',
  },
 
});
 
 
/* ────────────────────────────────────────────────────────────
   ANIMACIONES DE ENTRADA — Intersection Observer
   Los elementos se revelan al entrar al viewport
──────────────────────────────────────────────────────────── */
 
/**
 * Agrega la clase .is-visible cuando el elemento
 * entra al viewport. El CSS maneja la animación.
 */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        /* deja de observar una vez que ya se reveló */
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,   /* se activa cuando el 15% del elemento es visible */
    rootMargin: '0px 0px -40px 0px',
  }
);
 
/* Elementos a animar al hacer scroll */
const revealTargets = document.querySelectorAll(
  '.section-hero, .section-categories, .role-card'
);
 
revealTargets.forEach((el) => revealObserver.observe(el));
 
 
/* ────────────────────────────────────────────────────────────
   REDUCCIÓN DE MOVIMIENTO — respeta preferencias del usuario
   Si el usuario tiene activado "reduce motion", desactiva
   el autoplay y las animaciones de flotación del hero
──────────────────────────────────────────────────────────── */
 
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);
 
if (prefersReducedMotion.matches) {
  /* Detiene autoplay */
  categoriesSwiper.autoplay.stop();
 
  /* Quita la animación de flotación del hero */
  const heroImg = document.querySelector('.hero__img');
  if (heroImg) {
    heroImg.style.animation = 'none';
  }
}
 
 
/* ────────────────────────────────────────────────────────────
   UTILIDAD — ejecutar cuando el DOM está listo
──────────────────────────────────────────────────────────── */
 
document.addEventListener('DOMContentLoaded', () => {
 
  /* Confirma en consola que todo cargó correctamente */
  console.log('%c KLYDY Technology — app.js cargado ✓', 
    'color: #00f0c8; font-family: monospace; font-weight: bold;'
  );
 
});