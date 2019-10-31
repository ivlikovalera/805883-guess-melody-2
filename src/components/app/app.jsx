import React from 'react';
import {PureComponent} from 'react';
import {PropTypes as pt} from 'prop-types';
import {WelcomeScreen} from '../welcome-screen/welcome-screen.jsx';
import WhichGenreScreen from '../which-genre-screen/which-genre-screen.jsx';
import WhoSingerScreen from '../who-singer-screen/who-singer-screen.jsx';

export default class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        time,
        errorCount,
      } = props;

      return <WelcomeScreen
        time={time}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <WhichGenreScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `singer`: return <WhoSingerScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      questions,
    } = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          ...prevState,
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  time: pt.number.isRequired,
  errorCount: pt.number.isRequired,
  questions: pt.array,
};
