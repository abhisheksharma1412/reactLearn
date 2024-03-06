import styles from "./Input.module.css";

function Input({ display }) {
  return (
    <input type="text" className={styles.input} value={display} readOnly />
  );
}

export default Input;
