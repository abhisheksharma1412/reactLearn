import { useContext } from "react";
import { MdOutlineDeleteforever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              deleteItem(todoName);
            }}
          >
            <MdOutlineDeleteforever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
