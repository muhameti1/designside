// Router configuration
const routes = {
  "/": "templates/home.html",
  "/about": "templates/about.html",
  "/contact": "templates/contact.html",
};

// Template cache
const templateCache = new Map();

// Load template
async function loadTemplate(url) {
  // Check cache first
  if (templateCache.has(url)) {
    return templateCache.get(url);
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const template = await response.text();

    // Store in cache
    templateCache.set(url, template);
    return template;
  } catch (error) {
    console.error("Error loading template:", error);
    return '<div class="page"><h1>Error</h1><p>Could not load the page.</p></div>';
  }
}

// Router function
function route(event, path) {
  event?.preventDefault();
  window.history.pushState({}, "", path);
  handleLocation();
}

// Location handler
async function handleLocation() {
  const path = window.location.pathname;
  const templateUrl = routes[path] || routes["/"];
  const app = document.getElementById("app");

  // Show loading state
  app.innerHTML = '<div class="loading">Loading...</div>';

  // Load and render template
  const template = await loadTemplate(templateUrl);
  app.innerHTML = template;

  // Add event listeners if it's the contact page
  if (path === "/contact") {
    document
      .getElementById("contact-form")
      ?.addEventListener("submit", handleSubmit);
  }
}

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector("#email").value;
  const message = event.target.querySelector("#message").value;

  // Demo alert
  alert(`Message sent!\nEmail: ${email}\nMessage: ${message}`);
  event.target.reset();
}

// Handle browser back/forward buttons
window.addEventListener("popstate", handleLocation);

// Initial render
handleLocation();
