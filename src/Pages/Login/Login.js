import React from "react";
import { Button, Form } from "react-bootstrap";
import Social from "../Social/Social";

const Login = () => {
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <h2 className="text-center fw-bold ">Please Login</h2>
        <div className="col-6 mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <Social></Social>
        </div>
      </div>
    </div>
  );
};

export default Login;
