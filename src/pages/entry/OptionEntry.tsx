import React from "react";
import { OptionsProps } from "./Options";
import { Option } from "../../hooks/useOptions";
import { Col } from "react-bootstrap";

export interface OptionEntryProps extends OptionsProps, Option {}

const OptionEntry: React.FC<OptionEntryProps> = ({ name, imageURL, type }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <img style={{ width: "75%" }} alt={`${name} ${type}`} src={imageURL} />
    </Col>
  );
};

export default OptionEntry;
