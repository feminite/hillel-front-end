const API_KEY = '5d3251c36a06cf4d66c878779e60b660'; 

async function getWeather() {
    const cityElement = document.getElementById('city');
    const tempElement = document.getElementById('temp');
    const descElement = document.getElementById('desc');

    cityElement.innerText = "Update...";

    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=50.45&lon=30.52&appid=${API_KEY}&units={metric}&lang={ua}`);
        const data = await response.json();

        if (data.cod === 200) {
            const roundedTemp = parseInt(data.main.temp);
            
            cityElement.innerText = data.name;
            tempElement.innerText = roundedTemp + "°C";
            descElement.innerText = data.weather.description;
        } else {
            cityElement.innerText = "Error";
            descElement.innerText = data.message;
        }
    } catch (error) {
        cityElement.innerText = "Network error";
        console.error(error);
    }
}

getWeather();