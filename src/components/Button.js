import React from 'react';
import styles from '../styles/Calculator.module.css';

const Button = ({ label, onClick, isActive, setActiveButton }) => {
  const handleMouseDown = () => setActiveButton(null);

  let buttonClassName = styles.button;
  if (/\d/.test(label)) {
    buttonClassName += ` ${styles.numberButton}`;
  } else if (['.', '='].includes(label)) {
    buttonClassName += ` ${styles.operationButton}`;
  } else if (['C', 'CE', '+/-', '%'].includes(label)) {
    buttonClassName += ` ${styles.otherButton}`;
  } else {
    buttonClassName += ` ${styles.specialButton}`;
  }

  return (
    <button
      className={`${buttonClassName} ${isActive ? styles.active : ''}`}
      onClick={() => onClick(label)}
      data-testid={`button-${label}`}
      onMouseDown={handleMouseDown}
    >
      {label}
    </button>
  );
};

export default Button;
