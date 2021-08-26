import sun from '../images/sun.svg';

const colors = {
  sunny: '#FFB448',
  night: '#3E4772',
  rain: '#ABABB3',
  snow: '#FFFFFF',
};

function initialSetup() {
  const content = document.querySelector('#content');
  const todaysForecastWrap = document.createElement('div');
  todaysForecastWrap.id = 'todaysForecastWrap';
  const dailyWrapper = document.createElement('div');
  dailyWrapper.id = 'dailyWrapper';
  content.append(todaysForecastWrap);
  const sunIcon = new Image();
  sunIcon.src = sun;
  content.append(sunIcon);
}

export {initialSetup};
