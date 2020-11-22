import { Component } from "react";

import confLogo from "./../assets/images/badge-header.svg";
import Gravatar from "./Gravatar";
class Badge extends Component {
  render() {
    const { firstName, lastName, jobTitle, twitter, email } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__image">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__header">
          <Gravatar className="Badge__header-image" email={email} />
          <h1>
            {firstName} <br />
            {lastName}
          </h1>
        </div>
        <div className="Badge__body">
          <p className="Badge__jobtitle">{jobTitle}</p>
          <p>@{twitter}</p>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
