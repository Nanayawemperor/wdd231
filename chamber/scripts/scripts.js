document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => displayMembers(data.members))
        .catch(error => console.error("Error loading members:", error));

    function displayMembers(members) {
        membersContainer.innerHTML = "";

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <span class="membership-level level-${member.membership}">${getMembershipLevel(member.membership)}</span>
            `;

            membersContainer.appendChild(memberCard);
        });
    }

    function getMembershipLevel(level) {
        const levels = {1: "Member", 2: "Silver", 3: "Gold"};
        return levels[level] || "Member";
    }

    gridViewBtn.addEventListener("click", () => {
        membersContainer.classList.remove("list-view");
        membersContainer.classList.add("grid-view");
    });

    listViewBtn.addEventListener("click", () => {
        membersContainer.classList.remove("grid-view");
        membersContainer.classList.add("list-view");
    });
});