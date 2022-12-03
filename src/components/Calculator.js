import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
  }

  clickEvent = (e) => {
    const data = e.target.value;
    const state = calculate(this.state, data);
    this.setState(state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="displayScreen">
          {total}
          {operation}
          {next}
        </div>
        <div className="calcBody">
          <div className="calcRow">
            <button
              type="button"
              value="AC"
              onClick={this.clickEvent}
              className="calcBtn"
            >
              AC
            </button>
            <button
              type="button"
              value="+/-"
              onClick={this.clickEvent}
              className="calcBtn"
            >
              +/-
            </button>
            <button
              type="button"
              value="%"
              onClick={this.clickEvent}
              className="calcBtn"
            >
              %
            </button>
            <button
              type="button"
              value="÷"
              onClick={this.clickEvent}
              className="calcBtn operator"
            >
              /
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={7}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              7
            </button>
            <button
              type="button"
              value={8}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              8
            </button>
            <button
              type="button"
              value={9}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              9
            </button>
            <button
              type="button"
              value="x"
              onClick={this.clickEvent}
              className="calcBtn operator"
            >
              x
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={4}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              4
            </button>
            <button
              type="button"
              value={5}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              5
            </button>
            <button
              type="button"
              value={6}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              6
            </button>
            <button
              type="button"
              value="-"
              onClick={this.clickEvent}
              className="calcBtn operator"
            >
              -
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={1}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              1
            </button>
            <button
              type="button"
              value={2}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              2
            </button>
            <button
              type="button"
              value={3}
              onClick={this.clickEvent}
              className="calcBtn"
            >
              3
            </button>
            <button
              type="button"
              value="+"
              onClick={this.clickEvent}
              className="calcBtn operator"
            >
              +
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={0}
              onClick={this.clickEvent}
              className="btn0"
            >
              0
            </button>
            <button
              type="button"
              value="."
              onClick={this.clickEvent}
              className="calcBtn"
            >
              .
            </button>
            <button
              type="button"
              value="="
              onClick={this.clickEvent}
              className="calcBtn operator"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
