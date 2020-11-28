import { Component } from "react";

import DesactiveModal from "./DesactiveModal";

class BadgeForm extends Component {
  state = {
    isOpened: false,
  };

  handleClick = (e) => {
    console.log("Botton was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Botton was submitted");
  };

  handleDelete = (e) => {
    this.setState({ isOpened: true });
  };

  handleCloseModal = (e) => {
    this.setState({ isOpened: false });
  };

  render() {
    return (
      <div className="BadgeForm">
        <h1>{this.props.label} Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              className="form-control"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <div>
            <button type="submit" className="btn" onClick={this.handleClick}>
              Save
            </button>

            <button
              type="submit"
              className="btn btn--error"
              onClick={this.handleDelete}
            >
              Delete
            </button>
          </div>
        </form>
        <DesactiveModal
          isOpened={this.state.isOpened}
          onClose={this.handleCloseModal}
          title="Deactivate badge"
          message="Are you sure you want to deactivate your badge? All of your data will be permanently removed. This action cannot be undone."
        />
      </div>
    );
  }
}

export default BadgeForm;
