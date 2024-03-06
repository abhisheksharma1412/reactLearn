import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.name}
          todoName={todoItem.name}
          todoDate={todoItem.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
