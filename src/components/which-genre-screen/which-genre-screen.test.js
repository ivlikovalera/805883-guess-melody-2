import React from 'react';
import renderer from 'react-test-renderer';
import {WhichGenreScreen} from './which-genre-screen.jsx';

it(`WhichGenreScreen correctly renders`, () => {
  const genreScreen = renderer
  .create(<WhichGenreScreen
    question={{}}
    screenIndex={0}
    onAnswer={() => {}}
  />)
  .toJSON();

  expect(genreScreen).toMatchSnapshot();
});
