import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ConditionsLabelName = (
  <span>
    I agree to <span className="text-blue">terms of conditions</span>
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
