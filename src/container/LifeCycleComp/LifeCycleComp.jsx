import React, { Component } from "react";

export default class LifeCycleComp extends Component {
  // Mounting
  constructor(props) {
    super(props); // super harus ditambahkan jika "extends Component"
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  static getDerivedFromProps(props, state) {
    // component memliki nilai props dan state
    console.log("getDerivedFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  // updating
  shouldComponentUpdate(nextProps, nextState) {
    // komponents yang sangat berguna untuk meningkatkan performa dari sebuah web dimana bisa memblok update dari sebuah komponents
    console.group("shouldComponentUpdate");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    if (nextState.count >= 4) {
      return false;
    }
    console.groupEnd();
    return true; // jika tidak ada retun true maka komponents berhenti
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Mengchapture nilai prop sebelumnya dengan nilai props sebelumnya
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Menandakan Compoents telah selesai diupdate
    console.log("componentDidUpdate");
  }

  // unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <button onClick={this.changeCount}>LifeCycle {this.state.count}</button>
    );
  }
}
