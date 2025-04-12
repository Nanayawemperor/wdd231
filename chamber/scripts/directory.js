document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("mainNav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

    const membersSection = document.getElementById('members');
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');
  
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        data.members.forEach(member => {
          const card = document.createElement('div');
          card.classList.add('member-card');
  
          card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          `;
  
          membersSection.appendChild(card);
        });
      });
  
    gridBtn.addEventListener('click', () => {
      membersSection.classList.remove('list-view');
      membersSection.classList.add('grid-view');
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });
  
    listBtn.addEventListener('click', () => {
      membersSection.classList.remove('grid-view');
      membersSection.classList.add('list-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
  });

  
  