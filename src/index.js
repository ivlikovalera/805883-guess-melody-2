import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {
  const settings = {
    time: 5,
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        time={settings.time}
      />,
      document.querySelector(`#root`)
  );
};

init();
