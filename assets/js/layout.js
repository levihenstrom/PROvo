document.addEventListener("DOMContentLoaded", () => {
    // Helper to fetch and inject HTML partials
    function loadPartial(id, url) {
      const container = document.getElementById(id);
      if (!container) return;
  
      fetch(url)
        .then(res => res.text())
        .then(html => {
          container.innerHTML = html;
        })
        .catch(err => {
          console.error(`Error loading ${url}:`, err);
        });
    }
  
    // Load shared nav and footer
    loadPartial("nav-placeholder", "/partials/nav.html");
    loadPartial("footer-placeholder", "/partials/footer.html");
  });
  