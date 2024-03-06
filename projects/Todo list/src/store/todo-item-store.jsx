import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const reducerTodoItem = (currTodoItems, action) => {
  let newTodoItem = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newTodoItem = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItem = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItem;
};
const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(reducerTodoItem, []);

  const addNewItem = (itemName, itemDate) => {
    const newTodoAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newTodoAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteTodoAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteTodoAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
