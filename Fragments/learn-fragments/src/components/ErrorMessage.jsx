const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>I'm still hungrey</h3>}</>;
};
export default ErrorMessage;
