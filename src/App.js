import React, { useState } from 'react';
import './App.css';

// ✅ Put mock data outside the component or at the top of the component, NOT inside JSX
const mockWeatherData = {
  London: { temperature: '18°C', wind: '15 km/h', sky: 'Cloudy' },
  Paris: { temperature: '22°C', wind: '10 km/h', sky: 'Sunny' },
  Tokyo: { temperature: '20°C', wind: '12 km/h', sky: 'Rainy' },
  NewYork: { temperature: '25°C', wind: '18 km/h', sky: 'Partly Cloudy' },
  Chennai: { temperature: '34°C', wind: '8 km/h', sky: 'Sunny' },
  Sydney: { temperature: '25°C', wind: '10 km/h', sky: 'Clear' },
  Berlin: { temperature: '19°C', wind: '11 km/h', sky: 'Partly Cloudy' },
  Mumbai: { temperature: '33°C', wind: '6 km/h', sky: 'Humid' },
  Dubai: { temperature: '40°C', wind: '20 km/h', sky: 'Sunny' },
  Moscow: { temperature: '10°C', wind: '18 km/h', sky: 'Snowy' }
};

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const formatCityName = (name) =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const handleSearch = () => {
    const cityKey = formatCityName(city.trim());
    const data = mockWeatherData[cityKey];
    if (data) {
      setWeather(data);
      setError('');
    } else {
      setWeather(null);
      setError('City not found in mock data.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <><div className="weather-container">
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>Search</button>

      {weather && (
        <div className="weather-info">
          <p><strong>Temperature:</strong> {weather.temperature}</p>
          <p><strong>Wind Speed:</strong> {weather.wind}</p>
          <p><strong>Sky Condition:</strong> {weather.sky}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
    <div className="footer">
    <p>&copy; 2025 Janarthanan K 212223040072. All rights reserved.</p>
    </div>
    </>
  );
};

export default WeatherApp;
