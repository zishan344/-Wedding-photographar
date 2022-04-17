import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px" }}
          className="line bg bg-secondary bg-gradient opacity-25 w-50 my-4"
        ></div>
        <div className="px-3">Or</div>
        <div
          style={{ height: "1px" }}
          className="line bg bg-secondary bg-gradient opacity-25 w-50"
        ></div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary flex align-items-center align-items-center "
        >
          <FcGoogle className="fs-2" />
          <span className="px-2 fw-bold">Sign in With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
