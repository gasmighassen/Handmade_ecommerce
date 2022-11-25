import React from "react";
import "./style/carousel.css";
import { useState } from "react";
const Carousel = ({ prodId }) => {
  const imgs = [
    {
      id: 0,
      value:
        "https://i.etsystatic.com/14695396/r/il/ba57a1/3672307127/il_794xN.3672307127_hf7c.jpg",
    },
    {
      id: 1,
      value:
        "https://i.etsystatic.com/14695396/r/il/098ca7/4334294742/il_794xN.4334294742_641n.jpg",
    },
    {
      id: 2,
      value:
        "https://i.etsystatic.com/14695396/r/il/7a4293/4381690407/il_794xN.4381690407_h0u4.jpg",
    },
    {
      id: 3,
      value:
        "https://i.etsystatic.com/14695396/r/il/f59428/4334294906/il_794xN.4334294906_fptl.jpg",
    },
    {
      id: 4,
      value:
        "https://i.etsystatic.com/14695396/r/il/504e07/4381690765/il_794xN.4381690765_3ix6.jpg",
    },
    {
      id: 5,
      value:
        "https://i.etsystatic.com/14695396/r/il/ba5504/4381690443/il_794xN.4381690443_pfhe.jpg",
    },
    {
      id: 6,
      value:
        "https://i.etsystatic.com/14695396/r/il/e6360e/4381690427/il_794xN.4381690427_8vdk.jpg",
    },
  ];
  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);

    setWordData(imgs[index]);
  };
  return (
    <div className="main">
      <div className="flex_row">
        {imgs.map((e, i) => (
          <div className="thumbnail" key={i}>
            <img
              src={e.value}
              onClick={() => handleClick(i)}
              height="70"
              width="70"
              style={{ borderRadius: "20px" }}
            />
          </div>
        ))}
      </div>
      <img
        src={wordData.value}
        height="100%"
        width="150%"
        style={{ borderRadius: "20px" }}
      />
    </div>
  );
};

export default Carousel;
