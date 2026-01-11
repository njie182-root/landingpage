// ===== AOS Init =====
AOS.init({
  duration: 800,
  once: true
});

// ===== Dark / Light Mode =====
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// load saved theme
if(localStorage.getItem("theme") === "light"){
  body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if(body.classList.contains("light")){
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme","light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme","dark");
  }
});

// ===== Form Demo =====
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Pesan terkirim! 🚀");
});
