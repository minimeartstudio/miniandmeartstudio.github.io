// ===============================
// Shared Header Loader
// ===============================
(function () {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  // Try absolute first (best for custom domain), then fallback for some GH Pages setups
  fetch("/header.html")
    .then((res) => {
      if (!res.ok) throw new Error("Absolute fetch failed");
      return res.text();
    })
    .then((html) => {
      mount.innerHTML = html;
    })
    .catch(() => {
      // Fallback: relative fetch (helps if your site is hosted under a repo subpath)
      fetch("../header.html")
        .then((res) => res.text())
        .then((html) => {
          mount.innerHTML = html;
        });
    });
})();

// ===============================
// Nav shrink on scroll
// ===============================
(function () {
  const onScroll = () => {
    const header = document.querySelector(".topnav");
    if (!header) return;
    if (window.scrollY > 18) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// ===============================
// Back to Top button show/hide
// ===============================
(function () {
  const backToTop = document.querySelector(".back-to-top");
  if (!backToTop) return;

  const toggleButton = () => {
    if (window.scrollY > 300) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
  };

  window.addEventListener("scroll", toggleButton, { passive: true });
  toggleButton();
})();
