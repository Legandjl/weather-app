import {initialSetup} from './dom/dom';
import './style.css';

import {setCurrentForecast} from './app/logic';

initialSetup();

setCurrentForecast('southport').catch((err) => {
  if (err.name == 'TypeError') {
    console.log('type');
    // handle
  }
});

// call and setup the element in dom
