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

  // 2. Haven AI Coach Persona Switcher
  const personaButtons = document.querySelectorAll('.persona-btn');
  const coachAvatar = document.getElementById('coach-avatar');
  const coachName = document.getElementById('coach-name');
  const coachTag = document.getElementById('coach-tag');
  const chatStream = document.getElementById('chat-stream');

  const PERSONA_DATA = {
    science: {
      avatar: '🔬',
      name: 'Haven (Science Nerd)',
      tag: 'Science-Backed Protocols',
      userMsg: 'I only slept 5.5 hours. Have a high-stakes presentation at 2 PM today.',
      coachMsg: "Got it. Let's delay your caffeine intake until 10:30 AM to maximize natural cortisol spikes. Plan a 20-min power nap at 1:00 PM to clear adenosine buildup, and run a 4-7-8 breathing sequence right before speaking to lower your sympathetic response. Skip heavy lifting tonight — your HRV is 12% down."
    },
    zen: {
      avatar: '🧘',
      name: 'Haven (Zen Master)',
      tag: 'Mindful Clarity',
      userMsg: 'Feeling overwhelmed and anxious about this 2 PM talk.',
      coachMsg: 'Breathe in. Take a double inhale through your nose, then sigh slowly out through the mouth. Repeat this three times — it shifts your autonomic nervous system to parasympathetic dominance in seconds. Focus on the effort, not the outcome. You are ready.'
    },
    hype: {
      avatar: '🔥',
      name: 'Haven (Hype Coach)',
      tag: 'High Energy Drive',
      userMsg: 'Exhausted and zero motivation. Need to crush this talk.',
      coachMsg: "Stand up right now and shake your hands! Hydrate with 500ml of water and a pinch of salt. Put on your walk-up track for 2 minutes, get your chest up, and own the room. 5.5 hours is a minor detour — you've got everything you need inside. Let's go!"
    }
  };

  if (personaButtons.length > 0 && coachAvatar && coachName && coachTag && chatStream) {
    personaButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const personaKey = btn.getAttribute('data-persona');
        const data = PERSONA_DATA[personaKey];
        if (!data) return;

        // Toggle active button
        personaButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Animate swap
        coachAvatar.innerText = data.avatar;
        coachName.innerText = data.name;
        coachTag.innerText = data.tag;

        // Smoothly render chat messages
        chatStream.innerHTML = `
          <div class="chat-bubble user" style="animation: fadeIn 0.3s ease;">
            ${data.userMsg}
          </div>
          <div class="chat-bubble coach" style="animation: fadeIn 0.4s ease 0.1s both;">
            ${data.coachMsg}
          </div>
        `;
      });
    });
  }

  // 3. FAQ Accordion Toggle
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

  // 4. Smooth Header Background on Scroll
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

  // 5. Interactive Numbers Counter Animation (Metrics)
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
        const step = numericValue / 40;
        const interval = setInterval(() => {
          current += step;
          if (current >= numericValue) {
            item.innerText = (Number.isInteger(numericValue) ? numericValue : numericValue.toFixed(1)) + suffix;
            clearInterval(interval);
          } else {
            item.innerText = (Number.isInteger(numericValue) ? Math.floor(current) : current.toFixed(1)) + suffix;
          }
        }, 25);
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
