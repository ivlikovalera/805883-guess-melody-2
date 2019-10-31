import React from 'react';
import {PureComponent} from 'react';
import {PropTypes as pt} from 'prop-types';

export default class WhichGenreScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkboxesValues: [false, false, false, false]
    };
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer() {
    this.setState({
      checkboxesValues: [true, false, false, true]
    });
  }
  render() {
    const {question, screenIndex, onAnswer} = this.props;
    const {genre, answers} = question;
    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>
        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>
        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer();
        }}>
          {answers.map((it, i) => {
            return <div key={`${screenIndex}-answer-${i}`} className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio></audio>
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={`${this.state.checkboxesValues[i]}`} id={`answer-${i}`} onChange={this.updateAnswer}/>
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>;
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

WhichGenreScreen.propTypes = {
  question: pt.shape({
    answers: pt.array,
    genre: pt.string
  }),
  screenIndex: pt.number,
  onAnswer: pt.func
};
