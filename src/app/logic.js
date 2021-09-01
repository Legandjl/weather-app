import {displayForecast} from '../dom/dom';
import {forecastGenerator} from './forecastElements';
import {getTodaysForecast} from '../weatherData/apiQueries';

async function setCurrentForecast(location) {
  try {
    const todaysForecast = await getTodaysForecast(location);
    const currentforecast =
      forecastGenerator.getTodaysForecastElement(todaysForecast);
    const extraInfo = forecastGenerator.getTodaysDetails(todaysForecast);
    const daily = forecastGenerator.getDaily(todaysForecast);
    document.querySelector('#todaysForecastWrap').innerHTML = '';
    displayForecast(currentforecast);
    displayForecast(extraInfo);
    document.querySelector('#footer').remove();
    document.querySelector('#content').append(daily);
  } catch (err) {
    document.querySelector('#searchBox').value = '';
    document.querySelector('#searchBox').placeholder = 'Location not found.';
    return;
  }
}

export {setCurrentForecast};
