// Load header and sidebar
document.getElementById("header").innerHTML = fetch("includes/header.html").then(r => r.text()).then(html => document.getElementById("header").innerHTML = html);
document.getElementById("sidebar").innerHTML = fetch("includes/sidebar.html").then(r => r.text()).then(html => document.getElementById("sidebar").innerHTML = html);

// Function to load page content dynamically
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(response => response.ok ? response.text() : "<h2>404 - Page Not Found</h2>")
    .then(html => {
      const content = document.getElementById("content");
      content.innerHTML = html;
      content.scrollTop = 0;
    });
}
