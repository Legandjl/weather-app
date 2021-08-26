import {getTodaysForecast} from './weatherData/apiQueries';
import {initialSetup} from './dom/dom';
import './style.css';
import {elementGenerator} from './dom/elementGenerator';

initialSetup();

async function getCurrentForecast(location) {
  const todaysForecast = await getTodaysForecast(location);
  console.log(todaysForecast);
  elementGenerator.getTodaysForecastElement(todaysForecast);
}

getCurrentForecast('southport').catch((err) => {
  console.log(err);
});


// call and setup the element in dom

// icons https://icons8.com/icon/set/weather/small


