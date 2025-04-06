// Toggle Navigation for Mobile
function toggleNav(menu) {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('show');
    menu.classList.toggle('active');
}
  
// Update Last Modified Date in Footer
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    const now = new Date();
    footer.innerHTML = `&copy;2025 Accra Chamber of Commerce<br>Last Updated: ${now.toLocaleString()}`;
});

async function loadSpotlights() {
    const response = await fetch('members.json');
    const members = await response.json();
  
    // Filter for gold and silver members
    const spotlightMembers = members.filter(member =>
      member.membership === 'gold' || member.membership === 'silver'
    );
  
// Shuffle and pick 2 or 3 random members
const randomSpotlights = spotlightMembers
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

const container = document.getElementById('spotlightContainer');
randomSpotlights.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');
    card.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
    <h3>${member.name}</h3>
    <p>${member.description}</p>
    `;
    container.appendChild(card);
});
}

const apiKey = '644c26440276cf97e48f8ea210357b03';
const lat = 5.56;
const lon = -0.20;

const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-desc');
const forecastList = document.getElementById('forecast-list');

// Fetch current weather
async function getCurrentWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  currentTemp.textContent = `${data.main.temp.toFixed(1)}°C`;
  const icon = data.weather[0].icon;
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.alt = data.weather[0].description;
  weatherDesc.textContent = data.weather[0].description;
}

// Fetch 3-day forecast
async function getForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  const dailyForecast = {};
  data.list.forEach(forecast => {
    const date = forecast.dt_txt.split(' ')[0];
    if (!dailyForecast[date] && Object.keys(dailyForecast).length < 3) {
      dailyForecast[date] = {
        temp: forecast.main.temp,
        desc: forecast.weather[0].description,
        icon: forecast.weather[0].icon
      };
    }
  });

  forecastList.innerHTML = '';
  for (const [date, info] of Object.entries(dailyForecast)) {
    forecastList.innerHTML += `
      <li>
        <strong>${date}</strong>: ${info.temp.toFixed(1)}°C - ${info.desc}
        <img src="https://openweathermap.org/img/wn/${info.icon}.png" alt="${info.desc}">
      </li>
    `;
  }
}

getCurrentWeather();
getForecast();


// Call this on page load
document.addEventListener('DOMContentLoaded', loadSpotlights);

  