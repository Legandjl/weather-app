import {icons} from '../images/weatherIcons.js';
import celsiusIcon from '../images/celsius2.png';
import farhenheitIcon from '../images/farhenheit.png';
// import farhenheit from '../images/farhenheit.png';
import search from '../images/search.png';
import capitalize from 'capitalize';
import {setCurrentForecast} from './logic';
import {getUnits, setUnits} from './units.js';

const forecastGenerator = {};
const unitIcons = {
  metric: celsiusIcon,
  imperial: farhenheitIcon,
};

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
        image.src = unitIcons[getUnits()];
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
  document
      .querySelector('#content')
      .append(getUnitToggle(currentForecast.location));
  return forecastWrap;
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
// sets up the footer for displaying daily forecast
forecastGenerator.getDaily = (forecastArray) => {
  const footer = document.createElement('div');
  footer.id = 'footer';

  const arr = forecastArray.getDaily();

  for (let x = 0; x < arr.length; x++) {
    const currentForecastItem = arr[x];
    const dailyWrap = document.createElement('div');
    const dailyItemWrap = document.createElement('div');

    for (const [key, val] of Object.entries(currentForecastItem)) {
      dailyItemWrap.id = 'dailyItemWrap';
      if (key != 'icon') {
        const textWrap = document.createElement('div');
        textWrap.id = 'dailyText';
        textWrap.classList.add(key);
        textWrap.innerText = val;
        dailyItemWrap.append(textWrap);

        if (key == 'tempLow' || key == 'tempHigh') {
          const icon = new Image();
          icon.src = unitIcons[getUnits()];
          icon.id = 'dailyTemp';
          textWrap.append(icon);
        }
      }

      if (key == 'icon') {
        const imgWrap = document.createElement('div');
        imgWrap.id = 'dailyImageWrap';
        const icon = new Image();
        icon.src = icons[val];
        imgWrap.append(icon);
        dailyItemWrap.append(imgWrap);
      }
      dailyWrap.append(dailyItemWrap);
    }

    footer.append(dailyWrap);
  }
  return footer;
};

const getUnitToggle = (loc) => {
  const unitToggle = document.createElement('div');
  unitToggle.id = 'unitToggle';

  const celsiusToggle = new Image();
  celsiusToggle.src = unitIcons[getUnits()];

  unitToggle.addEventListener('click', (e) => {
    unitToggle.innerHTML = '';

    if (getUnits() == 'metric') {
      setUnits('imperial');
    } else {
      setUnits('metric');
    }
    setCurrentForecast(loc);
  });

  unitToggle.append(celsiusToggle);
  return unitToggle;
};
// helper - sets up and returns searchbox
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

export {forecastGenerator};
