import {icons} from '../images/weatherIcons.js';
import celsiusIcon from '../images/celsius.png';
import search from '../images/search.png';
import capitalize from 'capitalize';
import {setCurrentForecast} from './logic';


const forecastGenerator = {};

// sets up main forecast left side
forecastGenerator.getTodaysForecastElement = (forecastObject) => {
  const currentForecast = forecastObject.getMain();
  const forecastWrap = document.createElement('div');
  forecastWrap.id = 'todaysForecast';

  for (const [key, val] of Object.entries(currentForecast)) {
    if (key != 'iconKey' && key != 'id') {
      const container = document.createElement('div');
      container.classList.add('forecastItem');
      container.id = key;
      const wrapper = document.createElement('div');
      wrapper.classList.add('weatherInfoWrap');

      if (key != 'location') {
        wrapper.innerText = capitalize.words(val);
      } else {
        wrapper.innerText = val;
      }
      container.append(wrapper);

      if (key == 'temp') {
        const image = new Image();
        image.src = celsiusIcon;
        container.appendChild(image);
      }
      forecastWrap.append(container);
    }

    if (key == 'iconKey') {
      const imgWrap = document.createElement('div');
      imgWrap.id = 'forecastImageWrap';
      const icon = new Image();
      icon.src = icons[val];
      imgWrap.append(icon);
      forecastWrap.append(imgWrap);
    }
  }
  const searchWrap = getSearchWrap();
  forecastWrap.append(searchWrap);
  return forecastWrap;
};

const getSearchWrap = () => {
  const searchWrap = document.createElement('div');
  searchWrap.id = 'searchWrap';

  const searchBox = document.createElement('input');
  searchBox.type = 'text';
  searchBox.placeholder = 'Ex: Liverpool, GB';
  searchBox.id = 'searchBox';

  const searchIcon = new Image();
  searchIcon.src = search;

  searchWrap.append(searchBox);
  searchWrap.append(searchIcon);

  searchIcon.addEventListener('click', () => {
    setCurrentForecast(searchBox.value);
  });

  searchBox.addEventListener('keydown', (e) => {
    if (e.key != 'Enter') {
      return;
    }
    setCurrentForecast(searchBox.value);
  });

  return searchWrap;
};

// sets up todays details on the right side
forecastGenerator.getTodaysDetails = (forecastObject) => {
  const forecastInfo = forecastObject.getDetails();
  console.log(forecastInfo);
  const detailsWrap = document.createElement('div');
  detailsWrap.id = 'detailsWrap';

  for (const [key, val] of Object.entries(forecastInfo)) {
    const container = document.createElement('div');
    const containerTitle = document.createElement('div');
    containerTitle.classList.add('containerTitle');
    containerTitle.innerText = key;
    container.classList.add('forecastItem');
    container.innerText = val;
    if (key == 'Feels Like') {
      const image = new Image();
      image.src = celsiusIcon;
      container.append(image);
    }
    detailsWrap.append(containerTitle);
    detailsWrap.append(container);
  }

  return detailsWrap;
};

//

forecastGenerator.getHourlyElements = (elementArr) => {
  // loop through elements creating a container for each one
  // append to wrapper
  // return wrapper

  forecastGenerator.getDailyElements = (elementArr) => {
    // loop through elements creating a container for each one
    // append to wrapper
    // return wrapper
  };
};

export {forecastGenerator};
