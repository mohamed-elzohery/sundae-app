import React, { useState } from "react";
import { Button, Form, OverlayTrigger, Popover } from "react-bootstrap";

const ConditionsPopover = (
  <Popover id="termsOfConditions-popover">
    <Popover.Body>no ice cream will be delivered anyway</Popover.Body>
  </Popover>
);

const ConditionsLabelName = (
  <span>
    I agree to{" "}
    <OverlayTrigger overlay={ConditionsPopover} placement="right">
      <span className="text-blue">terms of conditions</span>
    </OverlayTrigger>
  </span>
);

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const isButtonDisabled = !isChecked;

  const handleCheckedChange = () => setIsChecked((prev) => !prev);
  return (
    <Form>
      <Form.Group controlId="terms-of-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckedChange}
          label={ConditionsLabelName}
        />
      </Form.Group>
      <Button
        disabled={isButtonDisabled}
        type="submit"
        variant="primary"
        className="btn btn-lg btn-success mt-3"
      >
        confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
