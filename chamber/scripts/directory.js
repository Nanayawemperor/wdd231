const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');
const directory = document.querySelector('#directory');

const requestURL = 'data/members.json';

async function getMembers() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching member data:', error);
  }
}

function displayMembers(members) {
  directory.innerHTML = ''; // Clear existing content

  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    directory.appendChild(card);
  });
}

// Toggle view buttons
gridButton.addEventListener('click', () => {
  directory.classList.add('grid');
  directory.classList.remove('list');
});

listButton.addEventListener('click', () => {
  directory.classList.add('list');
  directory.classList.remove('grid');
});

// Initialize
getMembers();
