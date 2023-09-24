import React from "react";
import Options, { OptionsEnum } from "./Options";

const OrderEntry = () => {
  return (
    <div>
      <Options type={OptionsEnum.SCOOPS} />
      <Options type={OptionsEnum.TOPPINGS} />
    </div>
  );
};

export default OrderEntry;
