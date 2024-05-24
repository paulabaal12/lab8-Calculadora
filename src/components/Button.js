import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({ value, onClick, operation, special }) => {
  const buttonClass = `${styles.button} ${
    operation ? styles.operationButton : special ? styles.specialButton : styles.numberButton
  }`;

  return (
    <button className={buttonClass} onClick={() => onClick(value, operation, special)}>
      {value}
    </button>
  );
};

export default Button;