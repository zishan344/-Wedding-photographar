import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = () => {
  const formSubmit = (e) => {
    e.preventDefault();

    toast("Thank you for the booking.");
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <h2 className="text-center fw-bold ">Discuss Individual Details</h2>
          <p className="subtitle  text-center">
            Leave A Message So We Can Have A Chat And Customize Your Session
          </p>
          <div className="col-lg-6 col-sm-10 col-12 mx-auto">
            <Form onSubmit={formSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="number"
                  placeholder="Phone"
                  required
                />
              </Form.Group>

              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Message*"
                  style={{ height: "100px" }}
                  required
                />
              </FloatingLabel>
              <div className="text-center my-3">
                <Button
                  className="w-50 opacity-75"
                  variant="danger"
                  type="submit"
                >
                  submit
                </Button>
              </div>
            </Form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
