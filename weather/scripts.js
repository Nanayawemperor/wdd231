const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');

// Coordinates for Trier, Germany (approximate)
const lat = 49.7563;
const lon = 6.6369;

// Your OpenWeatherMap API key (replace with your actual key)
const apiKey = '618aa18ac77b340902a149db24d45a74';

// URL for fetching weather data
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output to console for debugging

      // Extracting relevant weather data
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;

      // Updating the page with fetched data
      currentTemp.textContent = temp;
      weatherDescription.textContent = description;
      weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Call the function to fetch the data when the page loads
apiFetch();
