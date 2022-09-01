import React, { Component } from "react";
import "../Product.css";

export default class CardProduct extends Component {
  state = {
    order: 4,
    name: "vino",
  };

  handleCounterChange = newValue => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    // bisa langsung ke global
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    // hanya fokus ke method
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://images.tokopedia.net/img/cache/700/product-1/2020/3/30/75782982/75782982_8ff30a43-58f0-42a1-b762-18f014876acb_700_700"
            alt="product"
          />
        </div>
        <p className="product-title">Daging ayam segar</p>
        <p className="product-price">Rp. 410,000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}
