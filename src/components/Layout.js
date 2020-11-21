import { Component } from "react";

import Navbar from "./Navbar";

class Layout extends Component {
  render() {
    const children = this.props.children;
    return (
      <>
        <Navbar />
        {children}
      </>
    );
  }
}

export default Layout;
