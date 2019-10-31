import React from 'react';
import renderer from 'react-test-renderer';
import WhichGenreScreen from './which-genre-screen.jsx';
import {questions} from '../../mocks/questions.js';

it(`WhichGenreScreen correctly renders`, () => {
  const genreScreen = renderer
  .create(<WhichGenreScreen
    question={questions[0]}
    screenIndex={0}
    onAnswer={() => {}}
  />)
  .toJSON();

  expect(genreScreen).toMatchSnapshot();
});
