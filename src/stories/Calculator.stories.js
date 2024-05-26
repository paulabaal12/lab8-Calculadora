import React from 'react';
import Calculator from '../components/Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
};

export const Default = () => <Calculator />;
export const WithInitialValue = () => <Calculator initialValue={10} />;
export const PerformingAddition = () => (
  <Calculator initialValue={5} operator="+" operand={3} />
);
export const ShowingErrorForOverflow = () => (
  <Calculator
    initialValue={999999999}
    operator="+"
    operand={1}
    showError={true}
  />
);
