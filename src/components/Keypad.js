import React from 'react';
import Button from './Button';
import styles from '../styles/Keypad.module.css';

const Keypad = ({ handleClick }) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operations = ['+', '-', '*', '/'];
  const specialButtons = ['C', 'CE', '%'];

  return (
    <div className={styles.keypad}>
      <div className={styles.row}>
        {specialButtons.map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} special />
        ))}
        <Button value="/" onClick={handleClick} operation />
      </div>
      <div className={styles.row}>
        {numbers.slice(6, 9).map((num) => (
          <Button key={num} value={num} onClick={handleClick} />
        ))}
        <Button value="*" onClick={handleClick} operation />
      </div>
      <div className={styles.row}>
        {numbers.slice(3, 6).map((num) => (
          <Button key={num} value={num} onClick={handleClick} />
        ))}
        <Button value="-" onClick={handleClick} operation />
      </div>
      <div className={styles.row}>
        {numbers.slice(0, 3).map((num) => (
          <Button key={num} value={num} onClick={handleClick} />
        ))}
        <Button value="+" onClick={handleClick} operation />
      </div>
      <div className={styles.row}>
        <Button
          value={0}
          onClick={handleClick}
          className={styles.zeroButton}
        />
        <Button value="." onClick={handleClick} />
        <Button value="=" onClick={handleClick} operation />
      </div>
    </div>
  );
};

export default Keypad;