import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Social from "../Social/Social";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const emailhandle = (e) => {
    setEmail(e.target.value);
  };
  const resetPassword = async () => {
    if (!email) {
      return toast("write your email");
    }
    await sendPasswordResetEmail(email);
    toast("email send successfully");
  };
  const loginWitEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <h2 className="text-center fw-bold ">Please Login</h2>
        <div className="col-6 mx-auto">
          <Form onSubmit={loginWitEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={emailhandle}
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {loading && <p>Loading...</p>}
            <p className="text-danger">{error?.message}</p>
            <p
              onClick={resetPassword}
              className="text-primary btn btn-label-success p-0 text-decoration-underline"
            >
              Forget password
            </p>
            <p>
              I haven't account{" "}
              <Link className="text-primary" to="/register">
                {" "}
                Please Register
              </Link>
            </p>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <Social></Social>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
