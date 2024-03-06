const Input = ({ handleOnChange, handleKeyDown }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Enter food Item"
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}
    ></input>
  );
};

export default Input;
