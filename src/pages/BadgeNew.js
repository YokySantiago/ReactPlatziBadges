import React, { Component } from "react";
import Badge from "../components/Badge";

import header from "./../assets/images/badge-header.svg";
import starImage from "./../assets/images/stars.svg";

import BadgeForm from "./../components/BadgeForm";

class BadgeNew extends Component {
  state = {
    form: { firstName: "", lastName: "", email: "", jobTitle: "", twitter: "" },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <div
          className="w-screen py-8 bg-no-repeat mb-4 text-white"
          style={{ background: `url(${starImage}), #1B1B25` }}
        >
          <img src={header} alt="Banner Hero" />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4 relative">
            <div className="col-span-2">
              <div className="w-4/5 mx-auto">
                <Badge
                  firstName={this.state.form.firstName}
                  lastName={this.state.form.lastName}
                  jobTitle={this.state.form.jobTitle}
                  twitter={this.state.form.twitter}
                  email={this.state.form.email}
                  avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                />
              </div>
            </div>
            <div className="relative top-0 -mt-24">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
