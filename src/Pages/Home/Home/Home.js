import React from "react";
import Bannar from "../Bannar/Bannar";
import Insta from "../Insta/Insta";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Servic";
const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Portfolio></Portfolio>
      <Service></Service>
      <Insta></Insta>
    </div>
  );
};

export default Home;
