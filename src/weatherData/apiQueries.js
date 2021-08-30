const key = '5be21b7f49aed6165407fe53b49eba81';

const GetForecastObject = (forecast, location) => {
  // returns the details for display on the right side
  /*
  const getDetails = () => {
    const mainObject = {};
    mainObject.feel = forecast.current['feels_like'] + 'c';
    mainObject.humidity = forecast.current.humidity;
    mainObject.windSpeed = forecast.hourly[0]['wind_gust'];
    mainObject.rainChance = forecast.hourly[0].pop;
    return mainObject;
  };
*/
  // returns the main forecast object for display on the left side of screen
  const getMain = () => {
    const mainObject = {};
    mainObject.description = forecast.current.weather[0].description;
    mainObject.location = location;
    mainObject.temp = String(forecast.current.temp);
    mainObject.iconKey = forecast.current.weather[0].icon;
    return mainObject;
  };

  return {getMain};
};

// returns the coords of a location
// onecall requires coords instead of location

async function getCoordsAndLocation(location) {
  const locationData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
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
      ` http://api.openweathermap.org/data/2.5/onecall?lat=${coords[0]}&lon=${coords[1]}&appid=${key}&units=metric`,
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
