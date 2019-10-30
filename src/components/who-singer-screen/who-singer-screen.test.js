import React from 'react';
import renderer from 'react-test-renderer';
import {WhoSingerScreen} from './who-singer-screen.jsx';

it(`WhichGenreScreen correctly renders`, () => {
  const singerScreen = renderer
  .create(<WhoSingerScreen
    question={{}}
    screenIndex={0}
    onAnswer={() => {}}
  />)
  .toJSON();

  expect(singerScreen).toMatchSnapshot();
});
