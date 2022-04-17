import React, { useEffect, useState } from "react";
import PortFolioInfo from "../portFolioInfo/PortFolioInfo";
import "./Portfolio.css";
const Portfolio = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("gallary.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="title">Portfolio</h2>
      <p className="subtitle my-4">
        We're So Excited To Be In The Center Of The Happiest Day In People's
        Lives, And This Energy Drives Us Forward! Look Around, You Can Find The
        Full Wedding Photo Galleries In Our Blog, Or Check The Latest Updates In
        Our Wedding Istagram! Have Fun!
      </p>
      <div className="row">
        {gallery.map((img) => (
          <PortFolioInfo key={img.id} img={img}></PortFolioInfo>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
