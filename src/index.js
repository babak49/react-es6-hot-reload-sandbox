import React from 'react';
import ReactDOM from 'react-dom';
import { HotReloadComponent } from './component';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <HotReloadComponent />,
  document.getElementById('react-data-list')
);
