import Item from "./Item";

const Items = ({ items }) => {
  const handleOnClick = (event) => {
    // event.target.parentNode.style.backgroundColor = "grey";
  };
  return (
    <ul className="list-group ">
      {items.map((foodItem) => (
        <Item
          key={foodItem}
          foodItem={foodItem}
          handleOnClick={handleOnClick}
        ></Item>
      ))}
    </ul>
  );
};

export default Items;
