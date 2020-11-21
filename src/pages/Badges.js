import { Component } from "react";
import { Link } from "react-router-dom";

import starImage from "./../assets/images/stars.svg";
import header from "./../assets/images/badge-header.svg";

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

  feachData = () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const data = [
        {
          id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
          firstName: "Freda",
          lastName: "Grady",
          email: "Leann_Berge@gmail.com",
          jobTitle: "Legacy Brand Director",
          twitter: "FredaGrady22221-7573",
          avatarUrl:
            "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
        },
        {
          id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
          firstName: "Major",
          lastName: "Rodriguez",
          email: "Ilene66@hotmail.com",
          jobTitle: "Human Research Architect",
          twitter: "MajorRodriguez61545",
          avatarUrl:
            "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
        },
        {
          id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
          firstName: "Daphney",
          lastName: "Torphy",
          email: "Ron61@hotmail.com",
          jobTitle: "National Markets Officer",
          twitter: "DaphneyTorphy96105",
          avatarUrl:
            "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
        },
      ];
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
            <Link
              to="/badges/new"
              className="px-4 py-2 bg-platzi-green text-white rounded"
            >
              New badge
            </Link>
          </div>
          <div className="w-full sm:w-8/12 mx-auto grid grid-cols-1 gap-4 sm:px-none px-4">
            {this.state.loading && <BadgeList loading={this.state.loading} />}

            {!this.state.loading &&
              this.state.data.map((badge) => {
                return (
                  <div key={badge.id}>
                    <BadgeList
                      firstName={badge.firstName}
                      lastName={badge.lastName}
                      jobTitle={badge.jobTitle}
                      twitter={badge.twitter}
                      email={badge.email}
                      avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Badges;
