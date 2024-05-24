import Button from './Button';
import styles from '../styles/Calculator.module.css';

const Keypad = ({ handleClick }) => {
  return (
    <div className={styles.keypad}>
      <div className={styles.row}>
        <Button
          value="CE"
          onClick={(value) => handleClick(value, false, true)}
          className={`${styles.button} ${styles.specialButton}`}
        />
        <Button
          value="C"
          onClick={(value) => handleClick(value, false, true)}
          className={`${styles.button} ${styles.specialButton}`}
        />
        <Button
          value="+/-"
          onClick={(value) => handleClick(value, false, true)}
          className={`${styles.button} ${styles.specialButton}`}
        />
        <Button
          value="%"
          onClick={(value) => handleClick(value, false, true)}
          className={`${styles.button} ${styles.specialButton}`}
        />
      </div>
      <div className={styles.row}>
        <Button
          value="7"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="8"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="9"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="/"
          onClick={(value) => handleClick(value, true)}
          className={`${styles.button} ${styles.operationButton}`}
        />
      </div>
      <div className={styles.row}>
        <Button
          value="4"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="5"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="6"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="*"
          onClick={(value) => handleClick(value, true)}
          className={`${styles.button} ${styles.operationButton}`}
        />
      </div>
      <div className={styles.row}>
        <Button
          value="1"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="2"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="3"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton}`}
        />
        <Button
          value="-"
          onClick={(value) => handleClick(value, true)}
          className={`${styles.button} ${styles.operationButton}`}
        />
      </div>
      <div className={styles.row}>
        <Button
          value="0"
          onClick={(value) => handleClick(value)}
          className={`${styles.button} ${styles.numberButton} ${styles.zeroButton}`}
        />
        <Button
          value="."
          onClick={(value) => handleClick(value, true)}
          className={`${styles.button} ${styles.operationButton}`}
        />
        <Button
          value="="
          onClick={(value) => handleClick(value, true)}
          className={`${styles.button} ${styles.operationButton}`}
        />
        <Button
          value="+"
          onClick={(value) => handleClick(value, true)}
          className={`${styles.button} ${styles.operationButton}`}
        />
      </div>
    </div>
  );
};

export default Keypad;
