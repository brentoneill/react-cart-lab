import React from "react";

export default ({ size }) => {
  return (
    <div
      className="CartIndicator"
      style={{ marginLeft: 40, color: "#fff", position: "relative" }}
    >
      <i className="fa fa-shopping-cart" />
      {size === 0 ? (
        ""
      ) : (
        <span style={{ position: "absolute", top: 0, right: 0 }}>{size}</span>
      )}
    </div>
  );
};
