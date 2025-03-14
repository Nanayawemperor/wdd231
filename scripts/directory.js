const url = 'data/members.json';
const membersContainer = document.querySelector('#members');
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = ''; 

    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        const name = document.createElement('h2');
        name.textContent = member.name;

        const address = document.createElement('p');
        address.textContent = `📍 ${member.address}`;

        const phone = document.createElement('p');
        phone.textContent = `📞 ${member.phone}`;

        const website = document.createElement('a');
        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";

        const logo = document.createElement('img');
        logo.src = member.image;
        logo.alt = `${member.name} logo`;
        logo.loading = "lazy";

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);

        membersContainer.appendChild(card);
    });
}

gridButton.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

getMembers();