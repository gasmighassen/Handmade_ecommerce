import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
const steps = [
  {
    title: "Shop preferences",
    content: <FirstStep />,
  },
  {
    title: "Name your shop ",
    content: <SecondStep />,
  },
  {
    title: "Stock your shop ",
    content: <ThirdStep />,
  },
  {
    title: "How you'll get paid ",
    content: <FourthStep />,
  },
  {
    title: "Set up billing ",
    content: "Second-content",
  },
  {
    title: "Your shop security  ",
    content: "Last-content",
  },
];
const ConfigStep = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/2560px-Etsy_logo.svg.png"
        alt=""
      />
      <Steps current={current} items={items} />
      <div className="steps-content" style={{ margin: "5%" }}>
        {steps[current].content}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default ConfigStep;
