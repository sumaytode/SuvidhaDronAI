(function () {
    const nav = document.querySelector('nav');
    const toggle = nav.querySelector('.menu-toggle');
    const menu = nav.querySelector('#menu');

    if (!toggle || !menu) {
      console.error('Menu toggle or menu element not found');
      return;
    }

    // Toggle menu on button click
    toggle.addEventListener('click', function (e) {
      const isOpen = menu.classList.toggle('show');
      // update accessibility attribute
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when any menu link is clicked (useful for single page)
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close when clicking outside the nav (mobile)
    document.addEventListener('click', (evt) => {
      if (!nav.contains(evt.target) && menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Optional: close menu on ESC key
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape' && menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  })();

  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
  
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerText = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
  
    window.requestAnimationFrame(step);
  }

  // Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from("#hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});
gsap.from("#hero p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
});
gsap.from("#hero .btn", {
  opacity: 1,
  scale: 0.8,
  duration: 1,
  delay: 0.6,
});

// Page2 (About + Boxes)
gsap.from("#page2-left h1, #page2-left p", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top 70%",
  },
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.3,
});

gsap.from("#page2-right .box", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

// Page3 (Courses cards)
gsap.from("#page3 .card", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top 70%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
});

// Page4 (Mentors)
gsap.from("#page4 h2, #page4 p", {
  scrollTrigger: {
    trigger: "#page4",
    start: "top 70%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".mentor-card", {
  scrollTrigger: {
    trigger: "#page4",
    start: "top 65%",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.3,
});

// Page5 (Reviews marquee)
gsap.from("#page5 .review-card", {
  scrollTrigger: {
    trigger: "#page5",
    start: "top 70%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
});

// Page6 (Success Stories - counters)
gsap.from("#page6 h2, #page6 p", {
  scrollTrigger: {
    trigger: "#page6",
    start: "top 70%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
});

gsap.from("#page6 .stats-box", {
  scrollTrigger: {
    trigger: "#page6",
    start: "top 70%",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.3,
});

// Footer
gsap.from("#footer .footer-col", {
  scrollTrigger: {
    trigger: "#footer",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
});

// Animate student placement count
ScrollTrigger.create({
  trigger: "#page6",
  start: "top 80%",
  onEnter: () => {
    animateValue("student-count", 0, 100000, 1000);
    animateValue("student-count1", 0, 20000, 1000);
  },
  onEnterBack: () => {
    animateValue("student-count", 0, 100000, 1000);
    animateValue("student-count1", 0, 20000, 1000);
  }
});

