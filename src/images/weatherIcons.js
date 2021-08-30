import sun from './clearday.png';
import moon from './clearNight.png';
import cloudyDay from './cloudyDay.png';
import snow from './snow.png';
import drizzle from './drizzle.png';
import haze from './haze.png';
import thunderstorm from './thunderstorm.png';
import cloudynight from './cloudynight.png';
import scatteredCloud from './scatteredClouds.png';
import stormyNight from './stormNight.png';
import brokenCloudDay from './brokenCloudDay.png';
import rainDay from './rainyDay.png';
import rainNight from './rainyNight.png';

const icons = {

  // n = night
  // d = day

  '01d': sun,
  '01n': moon,

  '02d': cloudyDay,
  '02n': cloudynight,

  '03d': scatteredCloud,
  '03n': scatteredCloud,

  '04d': brokenCloudDay,
  '04n': cloudynight,

  '50d': haze,
  '50n': haze,

  '10d': rainDay,
  '10n': rainNight,

  '13d': snow,
  '13n': snow,

  '09d': drizzle,
  '09n': drizzle,

  '11d': thunderstorm,
  '11n': stormyNight,

};

export {icons};
