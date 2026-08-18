/* ==========================================================================
   Thrive Wellness — Interactive Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  });

  // 3. Smooth Header Background on Scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.style.top = '8px';
      } else {
        navbar.style.top = '16px';
      }
    });
  }

  // 4. Interactive Numbers Counter Animation (Metrics)
  const metricItems = document.querySelectorAll('.metric-item strong');
  let animated = false;

  const animateCounters = () => {
    if (animated) return;
    
    metricItems.forEach(item => {
      const text = item.innerText;
      const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
      const suffix = text.replace(/[0-9.]/g, '');
      
      if (!isNaN(numericValue)) {
        let current = 0;
        const step = numericValue / 50;
        const interval = setInterval(() => {
          current += step;
          if (current >= numericValue) {
            item.innerText = numericValue.toLocaleString() + suffix;
            clearInterval(interval);
          } else {
            item.innerText = Math.floor(current).toLocaleString() + suffix;
          }
        }, 30);
      }
    });
    animated = true;
  };

  const metricsSection = document.querySelector('.metrics-bar');
  if (metricsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(metricsSection);
  }
});
