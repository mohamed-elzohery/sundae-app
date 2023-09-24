import React from "react";
import { OptionsProps } from "./Options";
import { Option } from "../../hooks/useOptions";
import { Col, Form, Row } from "react-bootstrap";
import { useSelectedItemsContext } from "../../context/SelectedItemsCTX";

export interface OptionEntryProps extends OptionsProps, Option {}

const OptionEntry: React.FC<OptionEntryProps> = ({ name, imageURL, type }) => {
  const { updateSelectedItems } = useSelectedItemsContext();
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <img style={{ width: "75%" }} alt={`${name} ${type}`} src={imageURL} />
      <Form.Group id={`${name}-count`} as={Row} style={{ marginTop: "10px" }}>
        <Form.Label column xs={6} style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={(e) =>
              updateSelectedItems(type, name, parseInt(e.target.value))
            }
          ></Form.Control>
        </Col>
      </Form.Group>
    </Col>
  );
};

export default OptionEntry;
