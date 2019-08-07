import React from "react";
import * as api from "../../../api";

class AddComment extends React.Component {
  state = {
    inputValue: ""
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="add-comment">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={inputValue}
            placeholder="add comment..."
            className="comment-input"
            type="text"
          />
          <button type="submit">post</button>
        </form>
      </div>
    );
  }
  handleSubmit = e => {
    const { article_id, displayNewComment, username } = this.props;
    const { inputValue } = this.state;
    e.preventDefault();
    api
      .postComment(article_id, username, inputValue)
      .then(newComment => displayNewComment(newComment));
    this.setState({ inputValue: "" });
  };

  handleChange = e => {
    const { value } = e.target;
    return this.setState({ inputValue: value });
  };
}

export default AddComment;
