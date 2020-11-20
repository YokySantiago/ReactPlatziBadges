import React, { Component } from "react";

import logo from "../assets/images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="w-full py-2 bg-platzi-blue px-4">
        <a href="/" className="text-white flex flex-row justify-start items-center">
          <img src={logo} alt="Logo" className="mr-2"/>
          <span className="font-light">Platzi</span>
          <span className="font-bold">Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
