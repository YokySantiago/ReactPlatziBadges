import React from "react";
import confLogo from "./../assets/images/badge-header.svg";

class Badge extends React.Component {
  render() {
    const { avatarUrl, firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="bg-white shadow rounded overflow-hidden">
        <div className="pt-4 h-24 bg-platzi-black flex flex-col items-center">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="flex flex-row justify-center items-center py-4">
          <img
            src={avatarUrl}
            alt="Badge"
            className="rounded-full mr-4 w-20 h-20"
          />
          <h1>
            {firstName} <br />
            {lastName}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center py-2 bg-platzi-gray">
          <p className="text-2xl">{jobTitle}</p>
          <p>@{twitter}</p>
        </div>
        <div className="text-platzi-green h-14 flex flex-col justify-center items-center font-bold italic">
          #PlatziConf
        </div>
      </div>
    );
  }
}

export default Badge;
