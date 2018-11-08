import React from "react";

import { colors } from "../constants";

export default ({ products, onClickAddToCart }) => {
  return (
    <ul className="ProductList">
      {products &&
        products.length &&
        products.map(p => {
          return (
            <li key={p.id} className="ProductList__item">
              <img src={p.product_img_url} alt={p.title} />
              <p>{p.title}</p>
              <strong>${p.price}</strong>
              <button
                onClick={onClickAddToCart.bind(this, p)}
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  margin: "10px auto",
                  padding: 10,
                  border: 0,
                  borderRadius: 8,
                  display: "block",
                  textTransform: "uppercase",
                  color: "#fff",
                  backgroundColor: colors.brand_primary
                }}
              >
                <i className="fa fa-plus" />
                &nbsp; Add to cart
              </button>
            </li>
          );
        })}
    </ul>
  );
};
