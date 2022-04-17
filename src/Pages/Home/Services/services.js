import React from "react";
import "./Services.css";
const services = () => {
  return (
    <div className="container">
      <h2 id="service" className="title">
        Services
      </h2>
      <div className="row my-5">
        <div className="col-lg-4 col-md-6 col-sm-12 text-center  ">
          <div className="service-box pt-5 px-1">
            <h3>Elite</h3>
            <h2 className="fw-bolder fs-1 my-2">$999</h2>
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
        <div className="col-lg-4 col-md-6 col-sm-12 text-center">
          <div
            style={{ backgroundColor: "#f8f8f8" }}
            className="service-box  pt-5 px-1 "
          >
            <h3>Premium</h3>
            <h2 className="fw-bolder fs-1 my-2">$499</h2>
            <p className="service-info">Car transfer with air-con</p>
            <p className="service-info">Photoshoot in different locations</p>
            <p className="service-info text-decoration-line-through">
              Creative staged pictures
            </p>
            <p className="service-info">50 ready-to-print photographs</p>
            <p className="service-info">
              Toportfolio-level artistic post-editing with complex retouching
            </p>
            <p className="service-info">50 Internet-format photographs</p>
            <p className="service-info">5 hours of shooting</p>
            <div>
              <button className="my-4 btn btn-danger px-3">Order</button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
          <div className="service-box  pt-5 px-1">
            <h3>Standart</h3>
            <h2 className="fw-bolder fs-1 my-2">$199</h2>
            <p className="service-info text-decoration-line-through">
              Car transfer with air-con
            </p>
            <p className="service-info">
              Photoshoot{" "}
              <span className="text-decoration-line-through">
                in different locations
              </span>{" "}
            </p>
            <p className="service-info text-decoration-line-through">
              Creative staged pictures
            </p>
            <p className="service-info">20 ready-to-print photographs</p>
            <p className="service-info">
              <span className="text-decoration-line-through">
                Toportfolio-level{" "}
              </span>
              artistic post-editing with
              <span className="text-decoration-line-through">
                {" "}
                complex retouching
              </span>
            </p>
            <p className="service-info">20 Internet-format photographs</p>
            <p className="service-info">1 hours of shooting</p>
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
