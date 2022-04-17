import React from "react";
import Bannar from "../Bannar/Bannar";
import Insta from "../Insta/Insta";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/services";
const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Portfolio></Portfolio>
      <Services></Services>
      <Insta></Insta>
    </div>
  );
};

export default Home;
