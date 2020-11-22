import { Component } from "react";
import { Link } from "react-router-dom";

import starImage from "./../assets/images/stars.svg";
import header from "./../assets/images/platziconf-logo.svg";
import badges from "../badges.json";

import BadgeList from "./../components/BadgeList";

class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.feachData();
    }, 500);
  }

  feachData = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = badges;
      this.setState({
        loading: false,
        data,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    return (
      <>
        <div
          className="w-screen py-8 bg-no-repeat mb-4 text-white flex flex-col items-center"
          style={{ background: `url(${starImage}), #1B1B25` }}
        >
          <img src={header} alt="Banner Hero" />
        </div>
        <div className="container mx-auto">
          <div className="w-full sm:w-8/12 mx-auto flex flex-row justify-end mb-4 sm:px-none px-4">
            <Link to="/badges/new" className="btn">
              New badge
            </Link>
          </div>
          <div className="w-full sm:w-8/12 mx-auto grid grid-cols-1 gap-4 sm:px-none px-4">
            {this.state.loading && <BadgeList loading={this.state.loading} />}

            {!this.state.loading &&
              this.state.data.map((badge) => {
                return (
                  <Link
                    key={badge.id}
                    className="cursor-pointer"
                    to={`/badges/${badge.id}/edit`}
                  >
                    <BadgeList
                      firstName={badge.firstName}
                      lastName={badge.lastName}
                      jobTitle={badge.jobTitle}
                      twitter={badge.twitter}
                      email={badge.email}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Badges;
