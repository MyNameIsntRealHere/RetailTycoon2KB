window.addEventListener("DOMContentLoaded", () => {
  const base =
    location.hostname === "MyNameIsntRealHere.github.io"
      ? "/RetailTycoon2KB/"
      : "./";

  loadInclude("header", `${base}includes/header.html`);
  loadInclude("sidebar", `${base}includes/sidebar.html`);
});

function loadInclude(id, url) {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((err) => {
      console.error(err);
      document.getElementById(id).innerHTML = `<p>Failed to load ${id}</p>`;
    });
}

// Load content pages dynamically
function loadPage(page) {
  const base =
    location.hostname === "MyNameIsntRealHere.github.io"
      ? "/RetailTycoon2KB/"
      : "./";

  fetch(`${base}pages/${page}.html`)
    .then((res) => (res.ok ? res.text() : Promise.reject()))
    .then((html) => {
      const content = document.getElementById("content");
      content.innerHTML = html;
      content.scrollTop = 0;
    })
    .catch(() => {
      document.getElementById(
        "content"
      ).innerHTML = "<h2>404 - Page Not Found</h2>";
    });
}
