import React from "react";

const Gear = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center py-4">
          <div className="col-lg-6 col-sm-12 my-4">
            <h2 style={{ color: "#585858", fontWeight: "bold" }}>
              Professional Gear
            </h2>
            <div className="my-2">
              <p>
                I use a professional camera CANON 1DX in my sessions, it allows
                me to get high resolution and clarity images with natural colors
                being represented accurately.
              </p>
              <p>
                I use professional high aperture L-class lenses to get the best
                shots
              </p>

              <button className="btn btn-outline-danger  ">
                DISCUSS INDIVIDUAL DETAILS
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid"
                src={`https://max-webs.site/marketing/photographer/img/canon.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gear;
