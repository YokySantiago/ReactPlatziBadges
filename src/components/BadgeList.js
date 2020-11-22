import { Component } from "react";

import Gravatar from "./Gravatar";

class BadgeList extends Component {
  renderBadgeList() {
    const { email, firstName, lastName, jobTitle, twitter } = this.props;
    return (
      <div className="BadgeList" onClick={this.props.onClick}>
        <div className="BadgeList__header">
          <Gravatar email={email} className="BadgeList__header-image" />
        </div>
        <div className="BadgeList__content">
          <p className="BadgeList__name">
            {firstName} {lastName}
          </p>
          <p className="BadgeList__twitter">@{twitter}</p>
          <p className="BadgeList__jobtitle">{jobTitle}</p>
        </div>
      </div>
    );
  }

  renderLoading() {
    return (
      <div className="BadgeList loading">
        <div className="BadgeList__header">
          <div className="BadgeList__circle" />
        </div>
        <div className="BadgeList__content">
          <div className="h-6 BadgeList__field w-2/4" />
          <div className="h-3 BadgeList__field w-1/4" />
          <div className="h-4 BadgeList__field w-3/4" />
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
