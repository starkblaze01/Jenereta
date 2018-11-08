import React from "react";
import spinner from "./clock-in-gif.gif";

export default () => {
  return (
    <div style={{ margin: "auto" }}>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
