import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <p>
      This is the current time : {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </p>
  );
};

export default Clock;
