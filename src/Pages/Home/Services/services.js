import React from "react";
import "./Services.css";
const services = () => {
  return (
    <div className="container">
      <h2 className="title">Services</h2>
      <div className="row my-5">
        <div className="col-4 text-center  ">
          <div className="service-box">
            <h3>Elit</h3>
            <h2>$999</h2>
            <p className="service-info">Car transfer with air-con</p>
            <p className="service-info">Photoshoot in different locations</p>
            <p className="service-info">Creative staged pictures</p>
            <p className="service-info">100 ready-to-print photographs</p>
            <p className="service-info">
              Toportfolio-level artistic post-editing with complex retouching
            </p>
            <p className="service-info">100 Internet-format photographs</p>
            <p className="service-info">9 hours of shooting</p>
            <div>
              <button className=" my-4 btn btn-danger px-3">Order</button>
            </div>
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="service-box">
            <h3>Premium</h3>
            <h2>$999</h2>
            <p className="service-info">Car transfer with air-con</p>
            <p className="service-info">Photoshoot in different locations</p>
            <p className="service-info">Creative staged pictures</p>
            <p className="service-info">100 ready-to-print photographs</p>
            <p className="service-info">
              Toportfolio-level artistic post-editing with complex retouching
            </p>
            <p className="service-info">100 Internet-format photographs</p>
            <p className="service-info">9 hours of shooting</p>
            <div>
              <button className="my-4 btn btn-danger px-3">Order</button>
            </div>
          </div>
        </div>
        <div className="col-4 text-center ">
          <div className="service-box">
            <h3>Standart</h3>
            <h2>$999</h2>
            <p className="service-info text-decoration-line-through">
              Car transfer with air-con
            </p>
            <p className="service-info">Photoshoot in different locations</p>
            <p className="service-info">Creative staged pictures</p>
            <p className="service-info">100 ready-to-print photographs</p>
            <p className="service-info">
              Toportfolio-level artistic post-editing with complex retouching
            </p>
            <p className="service-info">100 Internet-format photographs</p>
            <p className="service-info">9 hours of shooting</p>
            <div className="my-2">
              <button className="my-4 btn btn-danger px-3">Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
