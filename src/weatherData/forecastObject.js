const GetForecastObject = (forecast, location) => {
  // returns the details for display on the right side

  const getDetails = () => {
    const mainObject = {};
    mainObject['Feels Like'] = forecast.current['feels_like'];
    mainObject['Humidity'] = forecast.current.humidity + '%';
    mainObject['Wind Speed'] =
      Number.parseFloat(forecast.current['wind_speed'] * 2.237).toPrecision(2) +
      ' m/ph';
    mainObject['Chance Of Rain'] = forecast.hourly[0].pop + '%';
    return mainObject;
  };

  // returns the main forecast object for display on the left side of screen
  const getMain = () => {
    const mainObject = {};
    mainObject.description = forecast.current.weather[0].description;
    mainObject.location = location;
    mainObject.temp = String(forecast.current.temp);
    mainObject.iconKey = forecast.current.weather[0].icon;
    return mainObject;
  };

  return {getMain, getDetails};
};

export {GetForecastObject};
