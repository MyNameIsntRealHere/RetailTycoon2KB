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

window.addEventListener("DOMContentLoaded", () => {
  loadInclude("header", "includes/header.html");
  loadInclude("sidebar", "includes/sidebar.html");

  if (window.innerWidth < 800) {
    alert("⚠️ This site is best viewed on a larger screen.\nSome elements will not display correctly.\nPutting your device horizontally might help at least a bit.");
  }
});

function loadPage(page, addToHistory = true) {
  fetch(`pages/${page}.html`)
    .then(res => res.ok ? res.text() : Promise.reject())
    .then(html => {
      const content = document.getElementById("content");
      content.innerHTML = html;
      content.scrollTop = 0;

      if (addToHistory) {
        history.pushState({ page }, "", `#${page}`);
      }
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<h4>404</h4><h5>Oops! The page you're looking for doesn't exist (yet).</h5><h5>You can use the sidebar to view another page.</h5><h5>If you think this is a mistake, feel free to contact MyNameIsntRealHere via Discord (@kwallentrein) or Roblox (@MyNameIsntRealHere)!</h5>";
    });
}

window.addEventListener("popstate", event => {
  if (event.state && event.state.page) {
    loadPage(event.state.page, false);
  } else {
    window.location.href = "index.html";
  }
});
