const key = 'b4609a0371e5da4b7c9c52d9527e882f';

// create an object holding weather icons
// name them as named in the data
// then if thunderstorm use icon thunderstorm etc

const getForecastObject = (forecast, location) => {
  const todaysForecast = {};

  console.log(forecast);

  todaysForecast.description = forecast.weather[0].description;
  todaysForecast.cloudCoverage = forecast.clouds + '% cloud coverage';
  todaysForecast.temp = forecast.temp + 'c current temp';
  todaysForecast.feel = 'feels like ' + forecast['feels_like'] + 'c';
  todaysForecast.humidity = forecast.humidity;
  todaysForecast.iconKey = forecast.weather[0].main;
  todaysForecast.location = location;

  return todaysForecast;
};

async function getCoords(location) {
  const locationData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
      {mode: 'cors'},
  );
  const locationDataJson = await locationData.json();
  return [locationDataJson.coord.lat, locationDataJson.coord.lon];
}

async function oneCall(location) {
  const coords = await getCoords(location);
  const data = await fetch(
      ` http://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&appid=${key}&units=metric`,
      {mode: 'cors'},
  );
  return data;
}

async function getTodaysForecast(location) {
  const allForecastData = await oneCall(location);
  const forecastJson = await allForecastData.json();
  const todaysForecast = getForecastObject(forecastJson.current, location);
  console.log(forecastJson);
  return todaysForecast;
}

export {getTodaysForecast};

// eslint-disable-next-line max-len
// console.log(forecastJson.daily[0].pop + '% chance of rain'); // can get prob of precip from daily
// eslint-disable-next-line max-len
// console.log(forecastJson.hourly[2].pop + '% chance of rain in 2 hours'); // and from hourly*/
