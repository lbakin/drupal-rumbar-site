(function () {
  const root = document.querySelector('.rb-hero__image');
  if (!root) return;
  let last = 0;
  window.addEventListener('scroll', () => {
    const y = Math.min(40, window.scrollY * 0.05); // cap movement
    if (Math.abs(y - last) < 0.5) return;
    last = y;
    root.style.transform = `translateY(${y}px) scale(1.05)`;
  }, { passive: true });
})();

