import { useContext, useRef } from "react";
import { RiFileAddFill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-item-store";

function EntryRow() {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  const { addNewItem } = useContext(TodoItemsContext);
  const todoItemName = useRef("");
  const todoItemDate = useRef("");

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfClicks.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(noOfClicks.current);
  // };

  const handleOnclick = (event) => {
    event.preventDefault();
    // setTodoName("");
    // setDueDate("");
    const todoName = todoItemName.current.value;
    const dueDate = todoItemDate.current.value;
    todoItemName.current.value = "";
    todoItemDate.current.value = "";
    addNewItem(todoName, dueDate);
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleOnclick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoItemName}
            placeholder="Enter your todo"
            //value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoItemDate}
            //value={dueDate}
            //  onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <RiFileAddFill />
          </button>
        </div>
      </form>
    </div>
  );
}

export default EntryRow;
