const apiKey = '87c49ed4944f43938bf70946241812';

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            if (data.error) {
                document.getElementById('weather-info').innerHTML = `<p>City not found. Please try again.</p>`;
            } else {
                const weather = data.current;
                const cityName = data.location.name;
                const date = new Date(data.location.localtime).toLocaleString();
                const temp = data.current.temp_c; 
                const humidity = data.current.humidity;
                const description = data.current.condition.text;
                const windspeed = data.current.wind_kph;
                const pressure = weather.pressure_mb;

                document.getElementById('city-name').textContent = cityName;
                document.getElementById('date-time').textContent = `Date: ${date}`;
                document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById('description').textContent = `Description: ${description}`;
                document.getElementById('windspeed').textContent = `Wind Speed: ${windspeed} km/h`;
                document.getElementById('pressure').textContent = `Pressure: ${pressure} mb`;
            }
        
        })
        .catch(error => {
            console.log(error);
            document.getElementById('weather-info').innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
        });
}


let backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
