// Infinity Loader Transition
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('infinity-loader').classList.add('fade-out');
  }, 2200); // Match SVG animation duration
});

// JavaScript for Intersection Observer (Scroll-triggered fade-in-up)

document.addEventListener('DOMContentLoaded', () => {
  // Setup the observer configuration
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If element enters viewport, add 'animate' class to trigger CSS transition
        entry.target.classList.add('animate');
        // Stop observing once animated so it doesn't re-trigger
        observer.unobserve(entry.target);
      }
    }); // <-- Fixed bracket here
  }, {
    rootMargin: '0px',
    // Trigger when 10% of the element is visible
    threshold: 0.1
  });

  // Find all elements with the 'fade-in-up' class and start observing them
  document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
  });
});
