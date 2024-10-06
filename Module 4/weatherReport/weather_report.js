function showWeatherDetails(event) {
  event.preventDefault();

  const cityInput = document.getElementById("city").value;
  const apiKey = "0549f7007eb39991b207b2f179f16eb8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                               <p>Temperature: ${data.main.temp} &deg;</p>
                               <p>Weather: ${data.weather[0].description}</p>`;
    });
}

const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit", showWeatherDetails);
