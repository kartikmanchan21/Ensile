// Intersection Observer to add fade-in effect when elements come into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5  // Trigger when 50% of the element is visible
});

// Target all planets, cosmic items, and constellations
const targets = document.querySelectorAll('.planet, .cosmic-item, .constellation');
targets.forEach(target => observer.observe(target));
