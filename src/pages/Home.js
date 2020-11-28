import { Component } from "react";
import { Link } from "react-router-dom";

import starImage from "./../assets/images/stars.svg";
import header from "./../assets/images/astronauts.svg";
import platzilogo from "./../assets/images/platziconf-logo.svg";

class Home extends Component {
  render() {
    return (
      <div
        className="w-screen h-screen"
        style={{ background: `url(${starImage}), #1B1B25` }}
      >
        <div className="w-7/12 mx-auto h-full grid grid-cols-3 items-center gap-8">
          <div className="">
            <img src={platzilogo} alt="Platzi Conf Logo" />
            <p className="text-3xl font-anton text-white mt-4 uppercase">
              Print your badges
            </p>
            <p className="text-white font-light text-lg mb-4">
              The easiest way to manage your conference
            </p>
            <Link
              to="/badges"
              className="px-4 py-2 bg-platzi-green text-white rounded"
            >
              Start Now
            </Link>
          </div>
          <img src={header} alt="Banner Hero" className="col-span-2 w-full" />
        </div>
      </div>
    );
  }
}

export default Home;
