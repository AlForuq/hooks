import React, { useState } from "react";
import { fruits } from "./mock";

const General = (Component) => {
  const G = () => {
    const [count, setCount] = useState(1);
    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <Component
        fruits={{ fruits }}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
  return G;
};

export default General;
