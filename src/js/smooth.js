if (window.innerWidth >= 1440) {
  window.addEventListener(
    'wheel',
    e => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 0.7,
        behavior: 'smooth',
      });
    },
    { passive: false }
  );
}
