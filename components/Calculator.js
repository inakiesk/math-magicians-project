import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
    };
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div className="displayScreen">
          {display}
        </div>
        <div className="calcBody">
          <div className="calcRow">
            <button
              type="button"
              value="AC"
              className="calcBtn"
            >
              AC
            </button>
            <button
              type="button"
              value="+/-"
              className="calcBtn"
            >
              +/-
            </button>
            <button
              type="button"
              value="%"
              className="calcBtn"
            >
              %
            </button>
            <button
              type="button"
              value="÷"
              className="calcBtn operator"
            >
              /
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={7}
              className="calcBtn"
            >
              7
            </button>
            <button
              type="button"
              value={8}
              className="calcBtn"
            >
              8
            </button>
            <button
              type="button"
              value={9}
              className="calcBtn"
            >
              9
            </button>
            <button
              type="button"
              value="x"
              className="calcBtn operator"
            >
              x
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={4}
              className="calcBtn"
            >
              4
            </button>
            <button
              type="button"
              value={5}
              className="calcBtn"
            >
              5
            </button>
            <button
              type="button"
              value={6}
              className="calcBtn"
            >
              6
            </button>
            <button
              type="button"
              value="-"
              className="calcBtn operator"
            >
              -
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={1}
              className="calcBtn"
            >
              1
            </button>
            <button
              type="button"
              value={2}
              className="calcBtn"
            >
              2
            </button>
            <button
              type="button"
              value={3}
              className="calcBtn"
            >
              3
            </button>
            <button
              type="button"
              value="+"
              className="calcBtn operator"
            >
              +
            </button>
          </div>

          <div className="calcRow">
            <button
              type="button"
              value={0}
              onClick={this.handleClick}
              className="btn0"
            >
              0
            </button>
            <button
              type="button"
              value="."
              onClick={this.handleClick}
              className="calcBtn"
            >
              .
            </button>
            <button
              type="button"
              value="="
              onClick={this.handleClick}
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