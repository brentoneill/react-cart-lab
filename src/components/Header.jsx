import React from "react";

import { CartIndicator } from "./";
import { colors } from "../constants";
import logo from "../images/logo.png";

export default ({ user, cartSize }) => {
  return (
    <header
      style={{
        backgroundColor: colors.brand_primary,
        padding: "10px 40px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }}
    >
      <div
        className="wrapper"
        style={{ position: "absolute", top: 10, left: 20 }}
      >
        <img alt={"Cadence Logo"} src={logo} style={{ maxHeight: 30 }} />
      </div>
      {user ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            alt={user.name}
            src={user.avatar_img_url}
            style={{
              maxHeight: 35,
              width: "auto",
              borderRadius: 35,
              marginRight: 10
            }}
          />
          <a href="/account">{user.name}</a>
        </div>
      ) : (
        <a href="/login">Log in</a>
      )}
      <CartIndicator size={cartSize ? cartSize : 0} />
    </header>
  );
};
