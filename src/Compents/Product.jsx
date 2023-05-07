import React from "react";
import General from "./General";

const Product = ({ count, increment, decrement, children }) => {
  return (
    <div>
      <h2>
        {children}:{count}{" "}
      </h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
};

export default General(Product);
