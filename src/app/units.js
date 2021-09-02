let units = 'metric';


const setUnits = (unit) => {
  units = unit;
};

const getUnits = () => {
  return units;
};

const getSpeedUnit = () => {
  if (units == 'metric') {
    return ' m/ph';
  } else {
    return ' k/mh';
  }
};
export {setUnits, getUnits, getSpeedUnit};
