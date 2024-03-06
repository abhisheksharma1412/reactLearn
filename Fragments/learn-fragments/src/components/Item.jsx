import styles from "./Item.module.css";

// const Item = (props) => {
//   //props or {fooditem} <=using object desturcturing
//   return (
//     <li key={props.fooditem} className="list-group-item">
//       {propqs.footitem}
//     </li>
//   );
// };

const Item = ({ foodItem, handleOnClick }) => {
  //props or {fooditem} <=using object desturcturing
  // const handleOnClick = (event) => {
  //   console.log(event.target);
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <li className="list-group-item">
      {foodItem}
      <button
        className={` ${styles.button} btn btn-info`}
        // onClick={handleOnClick}
        onClick={handleOnClick}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
