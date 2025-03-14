const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Fetch Prophet Data
const getProphetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // Check data in the console
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create a card element
        const card = document.createElement('section');
        card.classList.add('card');

        // Prophet's full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Prophet's birth details
        const birthInfo = document.createElement('p');
        birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

        // Prophet's portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');

        // Append elements to the card
        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);

        // Append card to the #cards div
        cards.appendChild(card);
    });
};

// Fetch and display data
getProphetData();