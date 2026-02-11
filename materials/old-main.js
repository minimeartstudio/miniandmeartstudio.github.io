(function () {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  const toggleButton = () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  };

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
})();
