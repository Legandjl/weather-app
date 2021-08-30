import {displayForecast} from '../dom/dom';
import {forecastGenerator} from './forecastElements';
import {getTodaysForecast} from '../weatherData/apiQueries';

async function setCurrentForecast(location) {
  try {
    const todaysForecast = await getTodaysForecast(location);
    const currentforecast =
      forecastGenerator.getTodaysForecastElement(todaysForecast);
    document.querySelector('#todaysForecastWrap').innerHTML = '';
    displayForecast(currentforecast);
    // elementGenerator.getTodaysDetails(todaysForecast);
  } catch (err) {
    document.querySelector('#searchBox').value = '';
    document.querySelector('#searchBox').placeholder =
      'Location not found.';
    return;
  }
}

export {setCurrentForecast};
