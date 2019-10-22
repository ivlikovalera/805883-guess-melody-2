import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const onStartButtonClick = jest.fn();
  const app = shallow(<App
    mistakes={0}
    minutes={0}
    onClick={onStartButtonClick}
  />);
  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(onStartButtonClick).toHaveBeenCalledTimes(1);
  const preventDefault = jest.fn();
  startButton.simulate(`click`, {preventDefault});
  expect(preventDefault).toHaveBeenCalledTimes(1);
});
