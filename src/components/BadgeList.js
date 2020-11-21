import { Component } from "react";
import confLogo from "./../assets/images/badge-header.svg";

class BadgeList extends Component {
  renderBadgeList() {
    const { avatarUrl, firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="bg-white shadow rounded overflow-hidden flex">
        <div className="my-auto px-4">
          <img
            src={avatarUrl}
            alt="Badge"
            className="rounded-full mr-4 sm:w-20 sm:h-20 h-16 w-16"
          />
        </div>
        <div className="py-4 pr-4">
          <p className="font-bold sm:text-xl text-lg">
            {firstName} {lastName}
          </p>
          <p className="text-blue-400 sm:text-sm text-xs">@{twitter}</p>
          <p className="sm:text-lg text-base font-light">{jobTitle}</p>
        </div>
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="bg-white shadow rounded overflow-hidden flex flex-row animate-pulse py-2">
        <div className="my-auto px-4 w-auto">
          <div className="rounded-full mr-4 sm:w-20 sm:h-20 h-16 w-16 bg-gray-300" />
        </div>
        <div className="py-4 pr-4 w-full">
          <div className="h-6 bg-gray-300 w-2/4 mb-2 rounded" />
          <div className="h-3 bg-gray-300 w-1/4 mb-2 rounded" />
          <div className="h-4 bg-gray-300 w-3/4 mb-2 rounded" />
        </div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }
    return this.renderBadgeList();
  }
}

export default BadgeList;
