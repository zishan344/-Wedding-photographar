import React from "react";

const Retouching = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12">
            <img
              className="img-fluid"
              src={`https://img.freepik.com/free-psd/front-view-laptop-mock-up-interior-decoration_23-2148690919.jpg?size=626&ext=jpg&uid=R47304621&ga=GA1.2.667994152.1649033771`}
              alt=""
            />
          </div>
          <div className="col-lg-6 col-sm-12 my-4">
            <h2 style={{ color: "#585858", fontWeight: "bold" }}>
              Professional Retouching
            </h2>
            <div className="my-2">
              <p>
                Each frame, each picture undergoes a full correction to
                accurately represent colors.
              </p>
              <p>
                Best shots are being fully retouched to turn into a works of art
                of the highest qjpguality.
              </p>
              <p>At the end you get pictures that delight our eyes!</p>
              <button className="btn btn-outline-danger  ">
                DISCUSS INDIVIDUAL DETAILS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retouching;
