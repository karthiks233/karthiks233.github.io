function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// document.getElementById('result').innerText = '{{ result }}';
document.addEventListener("DOMContentLoaded", function () {
    const words = ["Software", "Data", "Product", "Data", "Analytical", "AI", "ML", "Business Analytical"];
    let index = 0;
    const toggleWordEl = document.getElementById("toggle-word");

    setInterval(() => {
        index = (index + 1) % words.length;
        toggleWordEl.textContent = words[index];
    }, 1000);
});

// Get the logo element
var logo = document.querySelector('#profile .title');

// Add a class to make the logo visible with a transition
// logo.classList.add('visible');
 setTimeout(function () {
  logo.classList.add('visible');
}, 500);

