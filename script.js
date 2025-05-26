document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Optional: stop observing after revealed
      }
    });
  }, {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element is visible
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
});
