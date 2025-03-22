// Weather API Fetch
const apiKey = '618aa18ac77b340902a149db24d45a74';
const city = 'San Miguel,SV';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        document.getElementById('temp').textContent = Math.round(data.main.temp);
        document.getElementById('desc').textContent = data.weather[0].description;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecastList = document.getElementById('forecast');

        forecastList.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            let day = forecastData.list[i * 8]; // Approx every 24h
            let item = document.createElement('li');
            item.textContent = `📆 ${new Date(day.dt_txt).toLocaleDateString()} - 🌡 ${Math.round(day.main.temp)}°F`;
            forecastList.appendChild(item);
        }
    } catch (error) {
        console.error("Weather API error:", error);
    }
}

getWeather();

// Fetch and Display Spotlight Members
async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const goldSilverMembers = data.members.filter(member => member.membership === 'gold' || member.membership === 'silver');

        const selectedMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightContainer = document.getElementById('spotlight-container');
        spotlightContainer.innerHTML = "";

        selectedMembers.forEach(member => {
            let card = document.createElement('div');
            card.classList.add('spotlight-card');
            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="${member.logo}" alt="${member.name} Logo" width="100">
                <p>${member.address}</p>
                <p>📞 ${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

getSpotlights();
