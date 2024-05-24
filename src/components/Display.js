import React from 'react';
import styles from '../styles/Display.module.css';

const Display = ({ value }) => {
  return (
    <div className={styles.display}>
      <div className={styles.displayValue}>{value}</div>
    </div>
  );
};

export default Display;