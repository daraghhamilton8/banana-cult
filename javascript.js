
const pageNames = {
  "": "Home",
  "index.html": "Home",
  "gallery.html": "Gallery",
  "rogul.html": "Rogul",
  "thecrow.html": "The Crow",
  "newsletter.html": "News Letter"
};

/* HEADER */
fetch('/components/com.header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

/* FOOTER */
fetch('/components/com.footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

/* SIDEBAR + BUTTON */
fetch('/components/com.sidebar.html')
  .then(res => res.text())
  .then(data => {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = data;

    setTimeout(() => {
      const btn = document.querySelector(".menu-btn");

      if (btn) {
        btn.addEventListener("click", () => {
          sidebar.classList.toggle("active");
        });
      }
    }, 0);
  });