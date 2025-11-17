async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "<p>Please enter a city name!</p>";
    return;
  }

  const apiKey = "your_api_key";  // <- Replace with your OpenWeather API key
  const url = https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      result.innerHTML = "<p>City not found!</p>";
      return;
    }

    const data = await response.json();

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
  }
}