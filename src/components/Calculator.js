import React, { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [value, setValue] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (label) => {
    if (/\d/.test(label)) {
      if (displayValue.length >= 9) return;

      setDisplayValue(waitingForOperand ? label : displayValue === '0' ? label : displayValue + label);
      setWaitingForOperand(false);
    } else if (label === '.') {
      if (displayValue.length >= 9 || displayValue.includes('.')) return;

      setDisplayValue(displayValue + '.');
    } else if (['+', '-', '*', '/', '%'].includes(label)) {
      if (value !== null && operator) {
        const result = evaluate(value, parseFloat(displayValue), operator);
        setDisplayValue(formatResult(result));
        setValue(result);
      } else {
        setValue(parseFloat(displayValue));
      }

      setOperator(label);
      setWaitingForOperand(true);
    } else if (label === '=') {
      if (value === null || operator === null) return;

      const result = evaluate(value, parseFloat(displayValue), operator);
      setDisplayValue(formatResult(result));
      setValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (label === 'C') {
      setDisplayValue('0');
      setOperator(null);
      setValue(null);
      setWaitingForOperand(false);
    } else if (label === 'CE') {
      setDisplayValue(prevDisplayValue => {
        if (prevDisplayValue.length > 1) {
          return prevDisplayValue.slice(0, -1);
        } else {
          return '0';
        }
      });
    } else if (label === '+/-') {
      setDisplayValue(prevDisplayValue => {
        const num = parseFloat(prevDisplayValue);
        return formatResult(-num);
      });
    }
  };

  const formatResult = (result) => {
    if (isNaN(result)) {
      return 'ERROR';
    } else if (result < -999999999 || result > 999999999) {
      return 'ERROR';
    } else {
      const formattedResult = String(Math.abs(result)).slice(0, 8);
      return result < 0 ? '-' + formattedResult : formattedResult;
    }
  };

  const evaluate = (val1, val2, operator) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    let result;

    switch (operator) {
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
      case '%':
        result = num1 % num2;
        break;
      default:
        return val2;
    }

    return result;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (/\d|[-+*/%=]/.test(key)) {
        handleButtonClick(key);
        setActiveButton(key);
      } else if (key === 'Backspace') {
        handleButtonClick('CE');
        setActiveButton('CE');
      } else if (key === 'Delete') {
        handleButtonClick('C');
        setActiveButton('C');
      } else if (key === 'Enter') {
        handleButtonClick('=');
        setActiveButton('=');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleButtonClick]);

  useEffect(() => {
    if (activeButton) {
      const timeout = setTimeout(() => {
        setActiveButton(null);
      }, 100); 

      return () => clearTimeout(timeout);
    }
  }, [activeButton]);

  return (
    <div className={styles.container}>
      <Display value={displayValue} />
      <Keypad onButtonClick={handleButtonClick} activeButton={activeButton} setActiveButton={setActiveButton} />
    </div>
  );
};


export default Calculator;
