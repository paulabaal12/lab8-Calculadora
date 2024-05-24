import React, { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operation, setOperation] = useState(null);
  const [maxDigits, setMaxDigits] = useState(9); // Nuevo estado para controlar el límite de dígitos

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
    if (displayValue.length < maxDigits || (displayValue === '0' && value === '.')) {
      setDisplayValue((prev) => {
        const newValue = prev === '0' && !operation ? value : prev + value;
        return newValue;
      });
    }
  };

  const handleOperation = (op) => {
    if (op === '=') {
      performOperation();
    } else {
      if (currentValue === '') {
        setCurrentValue(displayValue);
      } else {
        performOperation();
      }
      setOperation(op);
      setMaxDigits(9); // Restablecer el límite de dígitos
    }
  };

  const handleSpecialButton = (value) => {
    switch (value) {
      case 'C':
        setDisplayValue('0');
        setCurrentValue('');
        setOperation(null);
        setMaxDigits(9); // Restablecer el límite de dígitos
        break;
      case 'CE':
        setDisplayValue('0');
        break;
      case '%':
        const number = parseFloat(displayValue);
        setDisplayValue((number / 100).toString());
        break;
      case '+/-':
        const num = parseFloat(displayValue);
        setDisplayValue((-num).toString());
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

    if (result < 0) {
      setDisplayValue('ERROR');
    } else if (result > 999999999) {
      setDisplayValue('ERROR');
    } else {
      setDisplayValue(result.toString().slice(0, 9));
      setCurrentValue(result.toString().slice(0, 9)); // Actualizar currentValue con el resultado
    }

    setOperation(null);
    setMaxDigits(9); // Restablecer el límite de dígitos
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (/\d/.test(key)) {
        if (displayValue.length >= maxDigits) return;
        handleClick(key);
      } else if (/[-+/*=]/.test(key)) {
        handleClick(key, true);
      } else if (key === 'Backspace') {
        handleClick('CE', false, true);
      } else if (key === 'Delete') {
        handleClick('C', false, true);
      } else if (key === 'Enter') {
        handleClick('=', true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [displayValue, maxDigits, handleClick]);

  return (
    <div className={styles.container}>
      <Display value={displayValue} />
      <Keypad handleClick={handleClick} />
    </div>
  );
};

export default Calculator;