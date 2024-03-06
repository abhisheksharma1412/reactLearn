import Items from "./components/Items";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Input from "./components/Input";
import "./App.css";
import { useState } from "react";

function App() {
  // let foodItems = ["Dal", "Paneer", "Oats", "Poha", "Soya chunks"];
  // let foodItems = [];

  const [foodItems, setFoodItem] = useState(["Bread", "Ghee"]);

  const [textToShow, setTextState] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setTextState(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value;
      const newItems = [...foodItems, newFoodItem];
      event.target.value = "";
      setFoodItem(newItems);
    }
  };

  return (
    // <div>
    <>
      <Container>
        <h1>Healthy foods</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <Input
          handleOnChange={handleOnChange}
          handleKeyDown={handleKeyDown}
        ></Input>
        <p>{textToShow}</p>
        <Items items={foodItems}></Items>
      </Container>
      {/* <Container>
        <p>Above listed items are good for your health</p>
      </Container> */}
    </>
    // </div>
  );
}

export default App;

// fragments also used to rap multiple elements. and after execution it get removed from DOM tree

//one more syntax
//<React.Fragment></React.Fragment>
//but for this we need do import React from "react"

//fragments
// <div>  {/* as we know we can only return single element from component for such reason we rap multiple components into div.but there is one disadvantage of this div. it creates an extra level in dom. for such purposes react provides React Fragments. */}

// {
//   /* <>
// <h1>Healthy foods</h1>
// <ul className="list-group">
//   <li className="list-group-item">Dal</li>
//   <li className="list-group-item">Paneer</li>
//   <li className="list-group-item">Oats</li>
//   <li className="list-group-item">Poha</li>
//   <li className="list-group-item">Soya chunks</li>
// </ul>
// </> */
// }

//map method
// {
//   /* <ul className="list-group">
//          this  data can be come from any sources. so practically we are not able to write them individually.
//         and also we are not able to write for loop in JSX code. So. in such cases map() come into rescue
//         {foodItems.map((items) => (
//           <li key={items} className="list-group-item">
//             {items}
//           </li>
//         ))}
//       </ul>
//      */
// }

//conditonal rendering
//1=>if- else
// if (foodItems.length === 0) {
//   return <h3>I'm still hungrey</h3>;
// }

// {
//   /* 2=>ternary operator */
// }

// let empty = foodItems.length === 0 ? <h3>I'm still hungrey</h3> : null;
// {
//   /* {empty} */
// }

//3=>logical operator
// {foodItems.length === 0 && <h3>I'm still hungrey</h3>}
