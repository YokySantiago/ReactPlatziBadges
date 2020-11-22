import React, { Component } from "react";
import Badge from "../components/Badge";

import header from "./../assets/images/platziconf-logo.svg";
import starImage from "./../assets/images/stars.svg";
import badges from "../badges.json";

import BadgeForm from "./../components/BadgeForm";

class BadgeNew extends Component {
  state = {
    label: "New",
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

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      const data = badges;
      const element = data.find((item) => item.id === id);

      this.setState({
        label: "Edit",
        form: {
          firstName: element.firstName,
          lastName: element.lastName,
          email: element.email,
          jobTitle: element.jobTitle,
          twitter: element.twitter,
        },
      });
    }
  }

  render() {
    return (
      <>
        <div
          className="w-screen py-8 bg-no-repeat mb-4 text-white flex flex-col items-cente"
          style={{ background: `url(${starImage}), #1B1B25` }}
        >
          <img src={header} alt="Banner Hero" />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4 relative">
            <div className="col-span-2">
              <div className="w-4/5 mx-auto">
                <Badge
                  firstName={this.state.form.firstName || "First Name"}
                  lastName={this.state.form.lastName || "Last Name"}
                  jobTitle={this.state.form.jobTitle || "Job title"}
                  twitter={this.state.form.twitter || "Twitter"}
                  email={this.state.form.email || "Email"}
                />
              </div>
            </div>
            <div className="relative top-0 -mt-24">
              <BadgeForm
                label={this.state.label}
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
