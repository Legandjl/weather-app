const key = 'b4609a0371e5da4b7c9c52d9527e882f';

const getForecastObject = (forecast) => {
  const todaysForecast = {};
  todaysForecast.description = forecast.weather[0].description;
  todaysForecast.cloudCoverage = forecast.clouds + '% cloud coverage';
  todaysForecast.temp = forecast.temp + 'c current temp';
  todaysForecast.feel = 'feels like ' + forecast['feels_like'] + 'c';
  todaysForecast.humidity = forecast.humidity;
  todaysForecast.iconKey = forecast.weather[0].main;
  return todaysForecast;
};

const getCoordsPromise = (location) => {
  return new Promise((resolve) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
        {mode: 'cors'},
    )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          resolve([data.coord.lat, data.coord.lon]);
        });
  });
};

const getTodaysForecastPromise = (location) => {
  return new Promise((resolve) => {
    getCoordsPromise(location)
        .then((result) => {
          return fetch(
              ` http://api.openweathermap.org/data/2.5/onecall?lat=${result[0]}&lon=${result[1]}&appid=${key}&units=metric`,
              {mode: 'cors'},
          );
        })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          const todaysForecast = getForecastObject(data.current);
          console.log(todaysForecast);
          resolve(todaysForecast);
        })
        .catch((err) => {
          console.log(err);
        });
  });
};

export {getTodaysForecastPromise};
