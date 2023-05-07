import React from "react";
import { fruits } from "./mock";
import Product from "./Product";
import General from "./General";

const Order = () => {
  return (
    <div>
      {fruits.map((v) => {
        return <Product key={v.id} />;
      })}
    </div>
  );
};

export default Order;
