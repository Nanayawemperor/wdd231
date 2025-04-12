document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-grid');
    const visitMessage = document.querySelector('.visit-message');

    const hamburger = document.querySelector(".hamburger");
    const nav = document.getElementById("mainNav");
  
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  
    fetch('data/items.json')
      .then(response => response.json())
      .then(data => {
        data.forEach((item, index) => {
          const card = document.createElement('section');
          card.className = 'card';
          card.style.gridArea = `card${index + 1}`;
  
          card.innerHTML = `
            <h2>${item.title}</h2>
            <figure>
              <img src="${item.image}" alt="${item.title}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
          `;
  
          cardsContainer.appendChild(card);
        });
      });
  
    // Handle localStorage visit tracking
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
  
    if (!lastVisit) {
      visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
      const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
      if (days === 0) {
        visitMessage.textContent = 'Back so soon! Awesome!';
      } else if (days === 1) {
        visitMessage.textContent = 'You last visited 1 day ago.';
      } else {
        visitMessage.textContent = `You last visited ${days} days ago.`;
      }
    }
  
    localStorage.setItem('lastVisit', now);
  });
  
