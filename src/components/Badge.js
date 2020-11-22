import { Component } from "react";
import confLogo from "./../assets/images/badge-header.svg";

class Badge extends Component {
  render() {
    const { avatarUrl, firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__image">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__header">
          <img
            src={avatarUrl}
            alt="Badge"
            className="Badge__header-image"
          />
          <h1>
            {firstName ? firstName : "First Name"} <br />
            {lastName ? lastName : "Last Name"}
          </h1>
        </div>
        <div className="Badge__body">
          <p className="Badge__jobtitle">{jobTitle ? jobTitle : "Job title"}</p>
          <p>@{twitter ? twitter : "Twitter"}</p>
        </div>
        <div className="Badge__footer">
          #PlatziConf
        </div>
      </div>
    );
  }
}

export default Badge;
