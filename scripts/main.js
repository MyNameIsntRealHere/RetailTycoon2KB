window.addEventListener("DOMContentLoaded", () => {
loadInclude("header", "includes/header.html");
loadInclude("sidebar", "includes/sidebar.html");
});


function loadInclude(id, url) {
fetch(url)
.then(res => res.text())
.then(html => document.getElementById(id).innerHTML = html);
}


function loadPage(page) {
fetch(`pages/${page}.html`)
.then(res => res.ok ? res.text() : Promise.reject())
.then(html => {
const content = document.getElementById("content");
content.innerHTML = html;
content.scrollTop = 0;
})
.catch(() => document.getElementById("content").innerHTML = "<h2>404 - Page Not Found</h2>");
}
