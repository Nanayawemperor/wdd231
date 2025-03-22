async function fetchSpotlights() {
    const response = await fetch('/data/members.json');
    const data = await response.json();
    
    let goldSilverMembers = data.members.filter(member => 
        member.membership === "Gold" || member.membership === "Silver"
    );

    let shuffled = goldSilverMembers.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 2);

    const spotlightsContainer = document.querySelector("#spotlights");
    spotlightsContainer.innerHTML = "";

    selected.forEach(member => {
        let memberCard = document.createElement("div");
        memberCard.classList.add("spotlight-card");
        memberCard.innerHTML = `
            <img src="${member.logo}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightsContainer.appendChild(memberCard);
    });
}

fetchSpotlights();
