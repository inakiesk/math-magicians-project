import { useState } from 'react';
import calculate from './logic/calculate';
import Navbar from './Navbar';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: '',
    next: null,
    operation: null,
  });

  const clickEvent = (e) => {
    const data = e.target.value;
    const state = calculate(obj, data);
    setObj(state);
  };

  const { total, next, operation } = obj;
  return (
    <div className="wrapper">
      <Navbar />
      <div className="calculator-wrapper">
        <h3 className="calculator-header">
          Let&apos;s do some Math!
        </h3>
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
                onClick={clickEvent}
                className="calcBtn"
              >
                AC
              </button>
              <button
                type="button"
                value="+/-"
                onClick={clickEvent}
                className="calcBtn"
              >
                +/-
              </button>
              <button
                type="button"
                value="%"
                onClick={clickEvent}
                className="calcBtn"
              >
                %
              </button>
              <button
                type="button"
                value="÷"
                onClick={clickEvent}
                className="calcBtn operator"
              >
                /
              </button>
            </div>

            <div className="calcRow">
              <button
                type="button"
                value={7}
                onClick={clickEvent}
                className="calcBtn"
              >
                7
              </button>
              <button
                type="button"
                value={8}
                onClick={clickEvent}
                className="calcBtn"
              >
                8
              </button>
              <button
                type="button"
                value={9}
                onClick={clickEvent}
                className="calcBtn"
              >
                9
              </button>
              <button
                type="button"
                value="x"
                onClick={clickEvent}
                className="calcBtn operator"
              >
                x
              </button>
            </div>

            <div className="calcRow">
              <button
                type="button"
                value={4}
                onClick={clickEvent}
                className="calcBtn"
              >
                4
              </button>
              <button
                type="button"
                value={5}
                onClick={clickEvent}
                className="calcBtn"
              >
                5
              </button>
              <button
                type="button"
                value={6}
                onClick={clickEvent}
                className="calcBtn"
              >
                6
              </button>
              <button
                type="button"
                value="-"
                onClick={clickEvent}
                className="calcBtn operator"
              >
                -
              </button>
            </div>

            <div className="calcRow">
              <button
                type="button"
                value={1}
                onClick={clickEvent}
                className="calcBtn"
              >
                1
              </button>
              <button
                type="button"
                value={2}
                onClick={clickEvent}
                className="calcBtn"
              >
                2
              </button>
              <button
                type="button"
                value={3}
                onClick={clickEvent}
                className="calcBtn"
              >
                3
              </button>
              <button
                type="button"
                value="+"
                onClick={clickEvent}
                className="calcBtn operator"
              >
                +
              </button>
            </div>

            <div className="calcRow">
              <button
                type="button"
                value={0}
                onClick={clickEvent}
                className="btn0"
              >
                0
              </button>
              <button
                type="button"
                value="."
                onClick={clickEvent}
                className="calcBtn"
              >
                .
              </button>
              <button
                type="button"
                value="="
                onClick={clickEvent}
                className="calcBtn operator"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
