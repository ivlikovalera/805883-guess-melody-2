import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from './welcome-screen.jsx';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    mistakes={0}
    errorCount={0}
    onStartButtonClick={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
