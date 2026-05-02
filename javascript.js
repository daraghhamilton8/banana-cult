
const pageNames = {
  "": "Home",
  "index.html": "Home",
  "gallery.html": "Gallery",
  "Rogul.html": "Rogul",
  "TheCrow.html": "The Crow"
};

/* HEADER + PAGE TITLE */
fetch('/com.header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    const page = window.location.pathname.split("/").pop();
    const title = document.getElementById("page-name");

    if (title) {
      title.textContent = pageNames[page] || "Home";
    }
  });

/* FOOTER */
fetch('/com.footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

/* SIDEBAR + BUTTON */
fetch('/com.sidebar.html')
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