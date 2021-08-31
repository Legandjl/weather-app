import {GetForecastObject} from './forecastObject';

const key = '5be21b7f49aed6165407fe53b49eba81';

// returns the coords of a location
// onecall requires coords instead of location

async function getCoordsAndLocation(location) {
  const locationData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
      {mode: 'cors'},
  );
  const locationDataJson = await locationData.json();
  const locationName =
    locationDataJson.name + ', ' + locationDataJson.sys['country'];
  return [locationDataJson.coord.lat, locationDataJson.coord.lon, locationName];
}

// returns all required data in a single call
async function oneCall(location) {
  const coords = await getCoordsAndLocation(location);
  const data = await fetch(
      ` https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&appid=${key}&units=metric`,
      {mode: 'cors'},
  );
  return [data, coords[2]];
}

async function getTodaysForecast(location) {
  const allForecastData = await oneCall(location);
  const forecastJson = await allForecastData[0].json();
  // eslint-disable-next-line new-cap
  const todaysForecast = GetForecastObject(forecastJson, allForecastData[1]);
  return todaysForecast;
}

export {getTodaysForecast};
