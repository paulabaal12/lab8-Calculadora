import React from 'react';
import Button from './Button';
import styles from '../styles/Calculator.module.css';

const Keypad = ({ onButtonClick, activeButton, setActiveButton }) => {
  const buttons = [
    'CE', 'C', '+/-', '%',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className={styles.keypad}>
      {buttons.map(button => (
        <Button
          key={button}
          label={button}
          onClick={onButtonClick}
          isActive={activeButton === button}
          setActiveButton={setActiveButton}
        />
      ))}
    </div>
  );
};

export default Keypad;
