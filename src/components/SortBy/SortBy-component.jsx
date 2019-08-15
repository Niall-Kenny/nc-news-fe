import React, { Component } from "react";
import "./sortBy.styles.scss";

class SortBy extends Component {
  render() {
    return (
      <div className="sort-by">
        <button
          name="created_at"
          className="sort-by-btn"
          onClick={this.handleClick}
        >
          date created
        </button>
        <button
          name="comment_count"
          className="sort-by-btn-m"
          onClick={this.handleClick}
        >
          comments count
        </button>
        <button name="votes" className="sort-by-btn" onClick={this.handleClick}>
          votes
        </button>
      </div>
    );
  }
  handleClick = e => {
    //sends name to query data
    const { name } = e.target;
    const { updateSortOrder } = this.props;
    updateSortOrder(name);
  };
}

export default SortBy;
