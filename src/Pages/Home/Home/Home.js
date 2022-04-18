import React from "react";
import Bannar from "../Bannar/Bannar";
import Gear from "../Gear/Gear";
import Insta from "../Insta/Insta";
import Portfolio from "../Portfolio/Portfolio";
import Retouching from "../Retouching/Retouching";
import Service from "../Service/Servic";
const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Portfolio></Portfolio>
      <Service></Service>
      <Retouching></Retouching>
      <Gear></Gear>
      <Insta></Insta>
    </div>
  );
};

export default Home;
