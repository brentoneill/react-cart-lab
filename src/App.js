import React, { Component } from "react";

import { user, products } from "./data";
import { Cart, Header, Footer, ProductList } from "./components";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // This is where we can define initial state
    this.state = {
      // Init an empty cart
      cart: [],
      // Set our data from API (or in this case, local json) to this component's state
      products,
      user
    };
  }

  handleAddToCart = product => {
    console.log("trying to add:", product);
  };

  // Every react component must have a render function!
  // Even if we are just rendering child components and using it as a HOC
  render() {
    // const { user, products } = this.state;

    return (
      <div className="App">
        <Header user={this.state.user} cartSize={0} />
        <div
          className="Content"
          style={{
            padding: 40,
            minHeight: 600,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "stretch"
          }}
        >
          <div style={{ flex: 70, paddingRight: 40 }}>
            <ProductList
              products={this.state.products}
              onClickAddToCart={this.handleAddToCart}
            />
          </div>
          <div style={{ flex: 30 }}>
            <Cart />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
