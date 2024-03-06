import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const personal = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Container>
        <div className="col-lg-6 mx-auto">
          <Header></Header>
          {personal ? <Privacy /> : <Result />}
          <Buttons></Buttons>
        </div>
      </Container>
    </div>
  );
}

export default App;
