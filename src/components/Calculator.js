import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleClick = (value, isOperation, isSpecial) => {
    if (isSpecial) {
      handleSpecialButton(value);
    } else if (isOperation) {
      handleOperation(value);
    } else {
      handleNumber(value);
    }
  };

  const handleNumber = (value) => {
    if (displayValue.length < 9) {
      setDisplayValue((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const handleOperation = (op) => {
    if (op === '=') {
      performOperation();
    } else {
      setOperation(op);
      setCurrentValue(displayValue);
      setDisplayValue('0');
    }
  };

  const handleSpecialButton = (value) => {
    switch (value) {
      case 'C':
        setDisplayValue('0');
        setCurrentValue('0');
        setOperation(null);
        break;
      case 'CE':
        setDisplayValue('0');
        break;
      case '%':
        const number = parseFloat(displayValue);
        setDisplayValue((number / 100).toString());
        break;
      default:
        break;
    }
  };

  const performOperation = () => {
    const num1 = parseFloat(currentValue);
    const num2 = parseFloat(displayValue);
    let result;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }

    if (result < 0 || result > 999999999) {
      setDisplayValue('ERROR');
    } else {
      setDisplayValue(result.toString());
    }

    setOperation(null);
    setCurrentValue('0');
  };

  return (
    <div className={styles.container}>
      <Display value={displayValue} />
      <Keypad handleClick={handleClick} />
    </div>
  );
};

export default Calculator;