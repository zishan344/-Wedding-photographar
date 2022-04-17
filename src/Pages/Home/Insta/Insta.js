import React from "react";
import { BsInstagram } from "react-icons/bs";
import "./Insta.css";
const Insta = () => {
  return (
    <div className="container-fluid insta-bg my-5">
      <div className="container">
        <div className="instagram-title">
          <p>
            <BsInstagram /> INSTAGRAM
          </p>
        </div>
        <div className="instagram-subtitle">
          <p className="bold">
            Official Instagram page
            <br /> www.instagram.com
          </p>
        </div>
        <a
          className="btn btn-outline-light fw-bold"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Subscribe in Instargram
        </a>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default Insta;
