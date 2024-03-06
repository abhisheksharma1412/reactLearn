import Heading from "./components/heading";
import EntryRow from "./components/EntryRow";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemContextProvider from "./store/todo-item-store";

function App() {
  // const [todoItems, setTodoList] = useState([]);

  return (
    <TodoItemContextProvider>
      <center>
        <Heading></Heading>
        <EntryRow></EntryRow>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
