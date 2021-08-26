
/* codes
thunderstorm
drizzle
rain
snow
tornado
mist
smoke
haze
dust
ash
fog
sand
clear
clouds
*/

// set up obj with these linking to images
// new image with the correct code

const elementGenerator = {};

elementGenerator.getTodaysForecastElement = (forecastObject) => {
  console.log(forecastObject);
  const forecastWrap = document.createElement('div');
  forecastWrap.id = 'todaysForecast';

  for (const [key, val] of Object.entries(forecastObject)) {
    console.log(`${key}: ${val}`);
  }
  // set up element
  // return forecast element
};

elementGenerator.getHourlyElements = (elementArr) => {
  // loop through elements creating a container for each one
  // append to wrapper
  // return wrapper

  elementGenerator.getDailyElements = (elementArr) => {
    // loop through elements creating a container for each one
    // append to wrapper
    // return wrapper
  };
};


export {elementGenerator};
