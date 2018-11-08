import React from "react";

import { colors } from "../constants";

export default () => {
  const today = new Date();

  return (
    <footer
      style={{
        backgroundColor: colors.brand_primary,
        padding: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <small style={{ color: "#fff" }}>
        © Cadence Labs {today.getYear() + 1900}
      </small>
    </footer>
  );
};
