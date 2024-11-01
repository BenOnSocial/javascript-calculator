import { createSlice } from '@reduxjs/toolkit';

export const OPERATORS = ['/', '*', '-', '+'];

export const isOperator = (op) => OPERATORS.indexOf(op) != -1;
const numberRegExp = new RegExp(/^\d*\.?\d*?$/);
export const isNumber = (num) => numberRegExp.test(num);

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    display: '0',
    expression: [],
  },
  reducers: {
    clear: (state, action) => {
      state.display = '0';
      state.expression = [];
    },
    operand: (state, action) => {
      const last = state.expression.at(-1);
      if (isNumber(last + action.payload)) {
        state.expression[state.expression.length - 1] = Number.parseFloat(
          last + action.payload
        );
      } else if (last === undefined || isOperator(last)) {
        state.expression.push(action.payload);
      } else if (last === '.' || last === '0.') {
        state.expression[state.expression.length - 1] = Number.parseFloat(
          last + action.payload
        );
      }
      state.display = state.expression.join(' ');
    },
    operator: (state, action) => {
      const last = state.expression.at(-1);
      if (!isOperator(last)) {
        state.expression.push(action.payload);
        state.display = state.expression.join(' ');
      }
    },
    evaluate: (state, action) => {
      const result = eval(state.display);
      state.expression = [result];
      state.display = result;
    },
  },
});

export const { clear, operand, operator, evaluate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
