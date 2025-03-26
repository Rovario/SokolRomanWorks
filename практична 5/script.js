const OPENCAGE_API_KEY = '657d221ea2d14fc3a244401c128665b6';
// я незнаю чи вам треба саме мій ключ для того щоб це працювало, але я вставив свій ключ на всякий випадок

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const errorMessage = document.getElementById('error-message');
const weatherInfo = document.getElementById('weather-info');
const cacheIndicator = document.getElementById('cache-indicator');

async function getCoordinates(city) {
    try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${OPENCAGE_API_KEY}`);
        const data = await response.json();

        if (data.results.length === 0) {
            throw new Error('Місто не знайдено');
        }

        const location = data.results[0].geometry;
        return {
            latitude: location.lat,
            longitude: location.lng,
            formattedCity: data.results[0].formatted
        };
    } catch (error) {
        throw new Error('Помилка геолокації: ' + error.message);
    }
}

async function getWeatherData(latitude, longitude) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&hourly=temperature_2m,relative_humidity_2m&timezone=auto`);
        
        if (!response.ok) {
            throw new Error('Не вдалося отримати погодні дані');
        }

        return await response.json();
    } catch (error) {
        throw new Error('Помилка отримання погоди: ' + error.message);
    }
}


function decodeWeatherCode(code) {
    const weatherCodes = {
        0: 'Ясно',
        1: 'Переважно ясно',
        2: 'Частково хмарно',
        3: 'Хмарно',
        45: 'Туман',
        48: 'Туман з інеєм',
        51: 'Легка мряка',
        53: 'Помірна мряка',
        55: 'Густа мряка',
        61: 'Легкий дощ',
        63: 'Помірний дощ',
        65: 'Сильний дощ',
        80: 'Зливи',
        81: 'Помірні зливи',
        82: 'Сильні зливи'
    };
    return weatherCodes[code] || 'Невідомо';
}


function cacheWeatherData(city, data) {
    const cacheKey = `weather_${city.toLowerCase()}`;
    const cacheData = {
        data: data,
        timestamp: Date.now()
    };
    
    
    sessionStorage.setItem(cacheKey, JSON.stringify(cacheData));
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
}


function getCachedWeatherData(city) {
    const cacheKey = `weather_${city.toLowerCase()}`;
    const cachedData = JSON.parse(sessionStorage.getItem(cacheKey) || localStorage.getItem(cacheKey) || 'null');
    
    
    if (cachedData && (Date.now() - cachedData.timestamp) < 3600000) {
        return cachedData.data;
    }
    
    return null;
}


async function searchWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        errorMessage.textContent = 'Введіть назву міста';
        weatherInfo.innerHTML = '';
        return;
    }

    
    errorMessage.textContent = '';
    cacheIndicator.textContent = '';

    try {
        
        const cachedData = getCachedWeatherData(city);
        
        if (cachedData) {
            displayWeatherData(cachedData, city, true);
            return;
        }

        
        const { latitude, longitude, formattedCity } = await getCoordinates(city);
        
        
        const weatherData = await getWeatherData(latitude, longitude);
        
        
        cacheWeatherData(formattedCity, weatherData);
        
        
        displayWeatherData(weatherData, formattedCity);

    } catch (error) {
        errorMessage.textContent = error.message;
        weatherInfo.innerHTML = '';
    }
}


function displayWeatherData(data, city, fromCache = false) {
    const current = data.current;
    const weatherCode = current.weather_code;

    weatherInfo.innerHTML = `
        <h2>${city}</h2>
        <p>Температура: ${current.temperature_2m}°C</p>
        <p>Погодні умови: ${decodeWeatherCode(weatherCode)}</p>
        <p>Швидкість вітру: ${current.wind_speed_10m} км/год</p>
    `;

    if (fromCache) {
        cacheIndicator.textContent = 'Дані з кешу';
    }
}


searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchWeather();
});



// прийміть роботу бідного студента, я вже не висипаюсь 3 день, хочу їсти, хочу спати, поставте будь ласка хоть якусь оцінку




 


