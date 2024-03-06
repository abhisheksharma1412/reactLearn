import "./App.css";
import Heading from "./components/Heading";
import Content from "./components/Content";
import Clock from "./components/Clock";
function App() {
  return (
    <center className="container">
      <Heading></Heading>
      <Content></Content>
      <Clock></Clock>
    </center>
  );
}

export default App;
