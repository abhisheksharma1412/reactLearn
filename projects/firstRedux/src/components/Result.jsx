import { useSelector } from "react-redux";

const Result = () => {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4 hhh">current counter value: {counter}</p>;
};

export default Result;
