import React from 'react';
import {PureComponent} from 'react';
import {PropTypes as pt} from 'prop-types';

export default class WhoSingerScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      radioButtonsValues: [false, false, false]
    };
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  updateAnswer() {
    this.setState({
      radioButtonsValues: [true, false, false]
    });
  }

  render() {
    const {question, screenIndex, onAnswer} = this.props;
    const {answers} = question;
    return <section className="game game--artist">
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
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist" onChange={onAnswer}>
          {answers.map((it, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="artist">
                <input className="artist__input visually-hidden" type="radio" name="answer" value={`${this.state.radioButtonsValues[i]}`} id={`answer-${i}`} onChange={this.updateAnswer}/>
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={it.picture} alt={it.singer}/>
                  {it.singer}
                </label>
              </div>);
          })};
        </form>
      </section>
    </section>;
  }
}

WhoSingerScreen.propTypes = {
  question: pt.shape({
    answers: pt.array
  }),
  screenIndex: pt.number,
  onAnswer: pt.func
};
