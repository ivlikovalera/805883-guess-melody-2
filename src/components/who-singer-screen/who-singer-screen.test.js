import React from 'react';
import renderer from 'react-test-renderer';
import WhoSingerScreen from './who-singer-screen.jsx';
import {questions} from '../../mocks/questions.js';

it(`WhoSingerScreen correctly renders`, () => {
  const singerScreen = renderer
  .create(<WhoSingerScreen
    question={questions[1]}
    screenIndex={0}
    onAnswer={() => {}}
  />)
  .toJSON();

  expect(singerScreen).toMatchSnapshot();
});
