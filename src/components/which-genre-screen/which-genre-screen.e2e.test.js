import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WhichGenreScreen from './which-genre-screen.jsx';
import {questions} from '../../mocks/questions.js';

Enzyme.configure({adapter: new Adapter()});

it(`WhichGenreScreen accept correct format`, () => {
  const sendingData = jest.fn();
  const genreScreen = shallow(<WhichGenreScreen
    question={questions[1]}
    screenIndex={0}
    onAnswer={() => {}}
  />);
  const checkbox = genreScreen.find(`input`);
  checkbox.at(0, 3).simulate(`change`, {target: {checked: true}});
  const submitButton = genreScreen.find(`.game__submit`);
  submitButton.simulate(`click`);
  expect(sendingData).toBeTruthy();
});
