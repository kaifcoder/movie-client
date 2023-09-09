import React from "react";
import { Button, Form } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, defaultValue, revText, labeText }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labeText}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
          ref={revText}
        />
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
