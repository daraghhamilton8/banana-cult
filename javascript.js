fetch('/com.header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

fetch('/com.footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

fetch('/com.sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  });

const sidebar = document.getElementById("sidebar");
const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
	sidebar.classList.toggle("active");
});