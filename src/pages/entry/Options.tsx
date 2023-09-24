import React from "react";
import useOptions from "../../hooks/useOptions";
import { Row } from "react-bootstrap";
import OptionEntry from "./OptionEntry";
import AppAlert from "../../components/common/Alert";

export enum OptionsEnum {
  "SCOOPS" = "scoops",
  "TOPPINGS" = "toppings",
}

export interface OptionsProps {
  type: OptionsEnum;
}

const Options: React.FC<OptionsProps> = ({ type }) => {
  const { options, hasError } = useOptions(type);

  return hasError ? (
    <AppAlert />
  ) : (
    <Row>
      {options.map(({ name, imageURL }) => (
        <OptionEntry imageURL={imageURL} name={name} type={type} key={name} />
      ))}
    </Row>
  );
};

export default Options;
