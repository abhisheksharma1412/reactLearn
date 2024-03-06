import { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({ type: "ADDITION", payload: { num: inputValue.current.value } });
    inputValue.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "DIFFERENCE",
      payload: { num: inputValue.current.value },
    });
    inputValue.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={handleIncrement}
      >
        +1
      </button>

      {/* decrement button */}
      <button
        type="button"
        className="btn btn-secondary btn-lg px-4 gap-3"
        onClick={handleDecrement}
      >
        -1
      </button>

      {/* privacy buttun */}
      <button type="button" className="btn btn-danger " onClick={handlePrivacy}>
        Privacy
      </button>

      {/* input and add subs button */}
      <div>
        <input type="text" placeholder="Enter Number" ref={inputValue} />
        <button type="button" className="btn btn-info" onClick={handleAddition}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSubtract}
        >
          Substract
        </button>
      </div>
    </div>
  );
};

export default Buttons;
