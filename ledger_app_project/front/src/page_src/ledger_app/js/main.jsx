import React, { Component } from 'react';
import Header from "../../component/js/header.js"
// import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return (
      <main>
        <Header />
        <p>hello world!</p>
      </main>
    )
  }
}

export default Hello;