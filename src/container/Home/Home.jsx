import React, { Component } from "react";
import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";

export default class Home extends Component {
  state = {
    showComp: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComp: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
      <>
        <p>Youtube Components</p>
        <hr />
        <YoutubeComp title="lagi" />
        <YoutubeComp title="ayo" />
        <YoutubeComp title="kapan" />
        <YoutubeComp title="coba" />
        <YoutubeComp />
        <br />
        <br />
        <br />
        <br />
        <p>Product Components</p>
        <hr />
        <Product />
        <br />
        <br />
        <br />
        <br />
        <p>LifeCycle Components</p>
        <hr />
        {this.state.showComp ? <LifeCycleComp /> : null}
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}
