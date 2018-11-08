import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);

    // This is where we can define initial state
    this.state = {
      // Init an empty cart
      items: []
    };
  }

  render() {
    return (
      <div
        className="Cart"
        style={{
          height: "100%",
          borderLeft: "1px solid #ddd",
          paddingLeft: 40,
          paddingRight: 40
        }}
      >
        <h2>Your Cart</h2>
      </div>
    );
  }
}

export default Cart;
