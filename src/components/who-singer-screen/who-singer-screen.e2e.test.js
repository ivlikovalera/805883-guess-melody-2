import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WhoSingerScreen from './who-singer-screen.jsx';
import {questions} from '../../mocks/questions.js';

Enzyme.configure({adapter: new Adapter()});

it(`WhoSingerScreen accept correct format`, () => {
  const sendingData = jest.fn();
  const genreScreen = shallow(<WhoSingerScreen
    question={questions[2]}
    screenIndex={0}
    onAnswer={() => {}}
  />);
  const radio = genreScreen.find(`input`);
  radio.simulate(`click`);
  expect(sendingData).toBeTruthy();
});
