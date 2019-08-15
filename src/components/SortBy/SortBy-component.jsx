import React from "react";
import "./sortBy.styles.scss";

const SortBy = ({ updateSortOrder }) => {
  return (
    <div className="sort-by">
      <button
        name="created_at"
        className="sort-by-btn"
        onClick={({ target }) => updateSortOrder(target.name)}
      >
        date created
      </button>
      <button
        name="comment_count"
        className="sort-by-btn-m"
        onClick={({ target }) => updateSortOrder(target.name)}
      >
        comments count
      </button>
      <button
        name="votes"
        className="sort-by-btn"
        onClick={({ target }) => updateSortOrder(target.name)}
      >
        votes
      </button>
    </div>
  );
};

export default SortBy;
