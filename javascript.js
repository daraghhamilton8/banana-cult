fetch('/com.header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

fetch('/com.sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  });

fetch('/com.sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
  });