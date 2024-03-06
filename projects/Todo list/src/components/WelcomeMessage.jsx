import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <h1 className={styles.welcome}>Enjoy Your Day</h1>
  );
}

export default WelcomeMessage;
