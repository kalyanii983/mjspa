// Scroll animations & interactivity
// Desktop: rich layered parallax, wave staggers, cursor & magnetic hovers
// Mobile: clean, lightweight, minimal reveals (smooth & non-distracting)
const has = (s) => document.querySelector(s);

export function initAnimations() {
  let ctx = null, off = null, dead = false;

  async function start() {
    if (ctx || dead) return;
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    if (ctx || dead) return;
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add('anim');

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    ctx = gsap.context(() => {
      if (isMobile) {
        // ==========================================
        // MINIMAL MOBILE ANIMATIONS ONLY
        // (Soft, subtle fade & slight upward glide, no aggressive scaling or pop-outs)
        // ==========================================

        // 1. Gentle Hero text entrance
        if (has('.mjhero')) {
          gsap.from('.mh-content > *', {
            y: 16,
            opacity: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          });
        }

        // 2. Minimal soft fade for all section headings
        const mobileHeadings = '[data-reveal], .mw-head, .mjt-head, .mji-head, .tranq-content';
        ScrollTrigger.batch(mobileHeadings, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 18, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              }
            ),
        });

        // 3. Subtle fade-in for cards (smooth, zero heavy scale/rotations)
        const mobileCards = '.mw-card, .menu-card, .mjt-card, .mji-card';
        ScrollTrigger.batch(mobileCards, {
          start: 'top 93%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 15, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: 'power2.out',
                clearProps: 'transform,opacity',
              }
            ),
        });

        return; // End mobile execution cleanly
      }

      // ==========================================
      // DESKTOP ANIMATIONS (Full rich experience)
      // ==========================================

      // 1. HERO REVEAL & PARALLAX
      if (has('.mjhero')) {
        gsap.from('.mh-content > *', {
          y: 35,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
        gsap.to('.mh-bg', {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: '.mjhero',
            scrub: true,
            start: 'top top',
            end: 'bottom top',
          },
        });
      }

      // 2. DESKTOP HEADINGS REVEAL
      const revealElements = '[data-reveal], .mw-head, .mjt-head, .mji-head, .tranq-content';
      ScrollTrigger.batch(revealElements, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              stagger: 0.1,
              clearProps: 'transform,opacity',
            }
          ),
      });

      // 3. WISDOM CARDS STAGGERED POP IN
      if (has('.mw-card')) {
        ScrollTrigger.batch('.mw-card', {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 60, opacity: 0, scale: 0.94 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.85,
                stagger: 0.15,
                ease: 'back.out(1.4)',
                clearProps: 'transform,opacity,scale',
              }
            ),
        });
      }

      // 4. THE MJ MENU TREATMENT CARDS WAVE-IN
      if (has('.menu-card')) {
        ScrollTrigger.batch('.menu-card', {
          start: 'top 92%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { x: -35, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.08,
                ease: 'power3.out',
                clearProps: 'transform,opacity',
              }
            ),
        });
      }

      // 5. TRANQUILITY PARALLAX
      if (has('.tranq')) {
        gsap.to('.tranq', {
          backgroundPosition: '50% 80%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.tranq',
            scrub: 1.5,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
        gsap.from('.tranq-script', {
          scale: 0.85,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tranq',
            start: 'top 75%',
            once: true,
          },
        });
      }

      // 6. SIGNATURE PACKAGES
      if (has('.mjt-card')) {
        ScrollTrigger.batch('.mjt-card', {
          start: 'top 86%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 50, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.18,
                ease: 'power3.out',
                clearProps: 'transform,opacity,scale',
              }
            ),
        });
      }

      // 7. INSTAGRAM GALLERY CASCADE
      if (has('.mji-card')) {
        ScrollTrigger.batch('.mji-card', {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 35, opacity: 0, scale: 0.9 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                clearProps: 'transform,opacity,scale',
              }
            ),
        });
      }

      // 8. SCROLL PROGRESS BAR
      gsap.to('.progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { scrub: true, start: 0, end: 'max' },
      });
    });

    // CUSTOM CURSOR (desktop only)
    if (!isMobile) {
      const dot = document.createElement('div');
      dot.className = 'cursor';
      document.body.append(dot);
      let x = 0, y = 0, raf = 0, big = false;

      const tick = () => {
        raf = 0;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        dot.classList.toggle('big', big);
      };
      const queue = () => { if (!raf) raf = requestAnimationFrame(tick); };
      const move = (e) => { x = e.clientX; y = e.clientY; queue(); };
      const over = (e) => {
        const t = e.target.closest && e.target.closest('a, button, .menu-card, .mw-card, .mjt-card, .mji-card');
        big = !!t;
        queue();
      };

      window.addEventListener('mousemove', move, { passive: true });
      window.addEventListener('mouseover', over, { passive: true });

      off = () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseover', over);
        cancelAnimationFrame(raf);
        dot.remove();
      };
    }
  }

  function stop() {
    if (!ctx) return;
    ctx.revert();
    ctx = null;
    if (off) off();
    off = null;
    document.documentElement.classList.remove('anim');
  }

  start();
  return () => {
    dead = true;
    stop();
  };
}
