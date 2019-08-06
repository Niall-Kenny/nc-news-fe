import React, { Component } from "react";

class SortBy extends Component {
  render() {
    return (
      <div className="sort-by">
        <button name="created_at" onClick={this.handleClick}>
          date created
        </button>
        <button name="comment_count" onClick={this.handleClick}>
          comments count
        </button>
        <button name="votes" onClick={this.handleClick}>
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
