import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {questions} from './mocks/questions.js';

const init = (gameQuestions) => {
  const settings = {
    time: 7,
    errorCount: 4,
  };

  ReactDOM.render(
      <App
        time={settings.time}
        errorCount={settings.errorCount}
        questions={gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
