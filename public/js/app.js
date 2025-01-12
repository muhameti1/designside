const loadPage = async (path) => {
  const page = path === "/" ? "/home.html" : `${path}.html`; // Use home.html for root
  try {
    const response = await fetch(page);
    if (response.ok) {
      const html = await response.text();
      document.getElementById("app").innerHTML = html;
    } else {
      document.getElementById(
        "app"
      ).innerHTML = `<h1>404 - Page Not Found!</h1>`;
    }
  } catch (error) {
    console.error("Error loading the page:", error);
    document.getElementById(
      "app"
    ).innerHTML = `<h1>Error loading the page!</h1>`;
  }
};

// Handle browser navigation (back/forward buttons)
window.onpopstate = () => loadPage(window.location.pathname);

// Handle navigation clicks
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.href.startsWith(window.location.origin)
  ) {
    e.preventDefault();
    history.pushState(null, "", e.target.href); // Update the URL
    loadPage(window.location.pathname); // Load the new page
  }
});

// Initial page load
loadPage(window.location.pathname);
