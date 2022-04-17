import React from "react";

const PortFolioInfo = ({ img }) => {
  const { images } = img;
  return (
    <div style={{ cursor: "pointer" }} className="col-12 col-md-4 col-lg-3">
      <img
        className="mt-3"
        style={{ width: "100%", height: "250px" }}
        src={images}
        alt=""
      />
    </div>
  );
};

export default PortFolioInfo;
