
function initialSetup() {
  const content = document.querySelector('#content');
  const todaysForecastWrap = document.createElement('div');
  todaysForecastWrap.id = 'todaysForecastWrap';
  const info = document.createElement('div');
  info.id = 'infoWrap';
  const dailyWrapper = document.createElement('div');
  dailyWrapper.id = 'dailyWrapper';
  // content.append(info);
  content.append(todaysForecastWrap);
  const footer = document.createElement('div');
  footer.id = 'footer';
  content.append(footer);
}

const displayForecast = (forecast) => {
  document.querySelector('#todaysForecastWrap').append(forecast);
};

export {initialSetup, displayForecast};
