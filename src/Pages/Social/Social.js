import React from "react";
import { FcGoogle } from "react-icons/fc";
const Social = () => {
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
        <button className="btn btn-outline-primary flex align-items-center align-items-center ">
          <FcGoogle className="fs-2" />
          <span className="px-2 fw-bold">Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
