import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Social from "../Social/Social";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const formSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cPassword = e.target.cPassword.value;
    if (cPassword !== password) {
      toast("password didn't match");
    }
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <h2 className="text-center fw-bold ">Please Register</h2>
          <div className="col-6 mx-auto">
            <Form onSubmit={formSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="cPassword"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <p>
                Already have an account{" "}
                <Link className="text-primary" to="/login">
                  {" "}
                  Please Login
                </Link>
              </p>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
            <Social></Social>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
