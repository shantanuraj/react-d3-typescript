import App from './App';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import data from './data';

ReactDOM.render(
  <App width={window.screen.availWidth} height={window.screen.availHeight} data={data} />,
  document.getElementById('app'),
);
