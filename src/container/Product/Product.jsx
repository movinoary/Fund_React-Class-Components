import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";

export default class Product extends Component {
  state = {
    order: 4,
    name: "vino",
  };

  handleCounterChange = newValue => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">VO</div>
          <div className="troley">
            <img
              src="https://static.bmdstatic.com/pk/product/medium/5e0aa81a94572.jpg"
              alt="troley"
            />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={value => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}
