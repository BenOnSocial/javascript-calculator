import { useSelector, useDispatch } from 'react-redux';
import { clear, operand, operator, evaluate } from './calculatorSlice';
import './Calculator.css';

export default function Calculator() {
  const display = useSelector((state) => state.calculator.display);
  const expression = useSelector((state) => state.calculator.expression);
  const dispatch = useDispatch();

  const handleInput = (input) => {
    switch (input) {
      case 'C':
        dispatch(clear());
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        dispatch(operator(input));
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        dispatch(operand(input));
        break;
      case 'ENTER':
      case '=':
        dispatch(evaluate());
        break;
      default:
        break;
    }

    const textarea = document.getElementById('display');
    textarea.scrollTop = textarea.scrollHeight;
  };

  document.addEventListener('keydown', (event) => {
    handleInput(event.key);
    event.target.blur();
  });

  const handleClick = (event) => {
    handleInput(event.target.textContent);
  };

  return (
    <form>
      <div className="container w-50">
        <div className="row">
          <textarea
            id="display"
            className="form-control border px-3 py-2 bg-light text-end"
            value={display}
            disabled
          ></textarea>
        </div>

        <div id="container" className="row row-cols-4 mt-4">
          <button
            id="clear"
            type="button"
            className="btn btn-danger border shadow"
            onClick={handleClick}
          >
            C
          </button>
          <button
            id="divide"
            type="button"
            className="btn btn-success border shadow"
            onClick={handleClick}
          >
            /
          </button>
          <button
            id="multiply"
            type="button"
            className="btn btn-success border shadow"
            onClick={handleClick}
          >
            *
          </button>
          <button
            id="subtract"
            type="button"
            className="btn btn-success border shadow"
            onClick={handleClick}
          >
            -
          </button>

          <div className="col-9">
            <div className="row row-cols-3">
              <button
                id="seven"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                7
              </button>
              <button
                id="eight"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                8
              </button>
              <button
                id="nine"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                9
              </button>
              <button
                id="four"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                4
              </button>
              <button
                id="five"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                5
              </button>
              <button
                id="six"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                6
              </button>
            </div>
          </div>
          <button
            id="add"
            type="button"
            className="btn btn-success shadow"
            onClick={handleClick}
            style={{ height: '8em' }}
          >
            +
          </button>
          <div className="col-9">
            <div className="row row-cols-3">
              <button
                id="one"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                1
              </button>
              <button
                id="two"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                2
              </button>
              <button
                id="three"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                3
              </button>
              <button
                id="zero"
                type="button"
                className="col-8 btn btn-secondary border shadow"
                onClick={handleClick}
              >
                0
              </button>
              <button
                id="decimal"
                type="button"
                className="btn btn-secondary border shadow"
                onClick={handleClick}
              >
                .
              </button>
            </div>
          </div>
          <button
            id="equals"
            type="button"
            className="btn btn-success border shadow"
            onClick={handleClick}
            style={{ height: '8em' }}
          >
            =
          </button>
        </div>
      </div>
    </form>
  );
}
