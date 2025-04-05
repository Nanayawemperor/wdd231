document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.getElementById("mainNav");
  
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  
    const courseButtons = document.querySelectorAll(".course-buttons button");
  
    window.filterCourses = function(type) {
      courseButtons.forEach(btn => {
        if (type === 'all') {
          btn.style.display = 'inline-block';
        } else if (btn.classList.contains(type)) {
          btn.style.display = 'inline-block';
        } else {
          btn.style.display = 'none';
        }
      });
    };
    const lastUpdateEl = document.getElementById("lastUpdate");
  if (lastUpdateEl) {
    const now = new Date();
    lastUpdateEl.textContent = now.toLocaleString(); // Formats nicely based on user locale
  }
  });