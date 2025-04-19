<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Weather-App

### Name: JANARTHANAN K
### Reg.No.: 212223040072
### Date: 19-04-2025

## Aim:
To create a simple weather application using React that allows the user to enter a city name and view simulated weather data such as temperature, wind speed, and sky condition.


## Algorithm:
### Step:1
React functional component (WeatherApp)
### Step:2
Text input to enter city name
### Step:3
A button or "Enter" key to trigger search
### Step:4
Display of weather data (if city is valid)
### Step:5
Error message for invalid cities
### Step:6
Basic styling using external or inline CSS


## Program:

### App.js
```
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
```

### App.css

```
/* WeatherApp.css */

body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #74ebd5, #ACB6E5);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .weather-container {
    background-color: #ffffffcc;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    width: 350px;
    text-align: center;
    backdrop-filter: blur(10px);
    animation: fadeIn 1s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  h2 {
    color: #333;
    margin-bottom: 20px;
    font-size: 26px;
  }
  
  input {
    padding: 10px;
    width: 80%;
    border: none;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  button {
    padding: 10px 20px;
    background: #007BFF;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;
  }
  
  button:hover {
    background: #0056b3;
  }
  
  .weather-info {
    margin-top: 20px;
    text-align: left;
    background: #e0f7fa;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .weather-info p {
    margin: 8px 0;
    font-size: 16px;
  }
  
  .error {
    color: #ff1744;
    margin-top: 15px;
    font-weight: bold;
  }
  
  .footer {
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    animation: fadeIn 2s ease-in-out;
  }
  
```

## Output:
![Screenshot (17)](https://github.com/user-attachments/assets/0501b19f-5ef1-4eb7-80eb-0d86734609a1)


## Result:

The program for create a simple weather application using React that allows the user to enter a city name and view simulated weather data such as temperature, wind speed, and sky condition is executed successfully.
>>>>>>> fed79ba9d28a79f2a73e43d1e8ca5c01a021dfe3
