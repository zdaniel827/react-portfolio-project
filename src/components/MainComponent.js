import React, { Component, Fragment } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Footer />
      </Fragment>
    );
  }
}

export default Main;
