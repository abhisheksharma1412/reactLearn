import styles from "./App.module.css";
import Input from "./component/input";
import Buttons from "./component/Buttons";
import { useState } from "react";
function App() {
  const [calval, setCalVal] = useState("");
  const handleButtonClick = (button) => {
    if (button === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else if (button === "AC") {
      setCalVal("");
      // } else if (button === "X") {
      //   const cal = calval;
      //   setCalVal(cal);
      // } else {
      const newCalVal = calval + button;
      setCalVal(newCalVal);
    }
  };
  return (
    <div className={styles.container}>
      <Input display={calval}></Input>
      <Buttons onClickHandle={handleButtonClick}></Buttons>
    </div>
  );
}

export default App;
