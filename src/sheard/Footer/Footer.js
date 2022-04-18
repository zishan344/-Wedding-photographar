import React from "react";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  const today = new Date();
  return (
    <div>
      <div className="container">
        <div className="row align-items-center pb-4">
          <div className="col-6 ">
            <div className="copyright">
              &copy; {today.getFullYear()} . All rights reserved.
            </div>
          </div>
          <div
            style={{ gap: "12px" }}
            className="col-6 text-end d-flex align-items-center justify-content-end"
          >
            <a
              href="#"
              className="icoFacebook text-secondary text-gradient"
              title="Facebook"
            >
              <BsFacebook className=" fs-3" />
            </a>

            <a
              href="#"
              className="icoTwitter text-secondary text-gradient"
              title="Twitte"
            >
              <AiOutlineTwitter className=" fs-2" />
            </a>

            <a
              href="#"
              className="icoGoogle text-secondary text-gradient"
              title="Google +"
            >
              <AiOutlineGooglePlus className=" fs-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
