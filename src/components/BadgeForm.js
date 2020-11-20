import { Component } from "react";

class BadgeForm extends Component {
  handleClick = (e) => {
    console.log("Botton was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Botton was submitted");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="flex flex-col my-2">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="px-4 py-2 rounded border border-platzi-gray focus:outline-blue focus:rounded text-sm"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="px-4 py-2 rounded border border-platzi-gray focus:outline-blue focus:rounded text-sm"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="px-4 py-2 rounded border border-platzi-gray focus:outline-blue focus:rounded text-sm"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="jobTitle">Job title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="px-4 py-2 rounded border border-platzi-gray focus:outline-blue focus:rounded text-sm"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              name="twitter"
              id="twitter"
              className="px-4 py-2 rounded border border-platzi-gray focus:outline-blue focus:rounded text-sm"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 bg-platzi-green rounded text-white focus:outline-none"
            onClick={this.handleClick}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
