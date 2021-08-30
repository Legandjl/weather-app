import {displayForecast} from '../dom/dom';
import {elementGenerator} from './forecastElements';
import {getTodaysForecast} from '../weatherData/apiQueries';

async function setCurrentForecast(location) {
  try {
    const todaysForecast = await getTodaysForecast(location);
    const currentforecast =
    elementGenerator.getTodaysForecastElement(todaysForecast);
    document.querySelector('#todaysForecastWrap').innerHTML = '';
    displayForecast(currentforecast);
    // elementGenerator.getTodaysDetails(todaysForecast);
  } catch (err) {
    console.log(err);
  }
}

export {setCurrentForecast};
