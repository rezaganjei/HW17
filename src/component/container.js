import React, { useState } from "react";

import "./container.css";

const Container = () => {
  let defaultCount = 0;
  const [count, setCount] = useState(defaultCount);
  const plusClickHandler = () => {
    setCount(count + 1);
  };
  const minusClickHandler = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div
        style={{
          margin: "auto",
          color: "red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        HELLO REACT!
      </div>
      <div className="container-class">
        <button onClick={plusClickHandler} className="plusButton">
          +
        </button>
        <div>{count}</div>
        <button onClick={minusClickHandler} className="minusButton">
          -
        </button>
      </div>
    </>
  );
};

export default Container;
