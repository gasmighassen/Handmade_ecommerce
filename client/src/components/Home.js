import React from "react";
import Item from "./Item";

import Navbar from "./Navbar";
import Promotion from "./Promotion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Promotion />
      <Item />
    </div>
  );
};

export default Home;
