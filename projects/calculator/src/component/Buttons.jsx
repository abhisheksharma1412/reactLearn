import styles from "./Buttons.module.css";
const Buttons = ({ onClickHandle }) => {
  const buttons = [
    "AC",
    "X",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ",",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttons.map((button) => (
        <button
          key={button}
          className={styles.btn}
          onClick={() => {
            onClickHandle(button);
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
