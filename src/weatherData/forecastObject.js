import {getDay, addWeeks, eachDayOfInterval} from 'date-fns';

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

  const getDaily = () => {
    const dailyArray = [];
    const daily = forecast.daily;

    const daysOfWeek = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    };

    const eachDay = eachDayOfInterval({
      start: new Date(),
      end: addWeeks(new Date(), 1),
    });

    eachDay.forEach((day, index) => {
      if (index == 0) {
        return;
      }
      const forecastObj = {
        weekDay: daysOfWeek[getDay(day)],
        tempHigh: daily[index].temp.max,
        tempLow: daily[index].temp.min,
        icon: daily[index].weather[0].icon,
      };
      dailyArray.push(forecastObj);
    });
    return dailyArray;
  };

  return {getMain, getDetails, getDaily};
};

export {GetForecastObject};
