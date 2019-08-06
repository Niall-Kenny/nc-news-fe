import React, { Component } from "react";
import * as api from "../../../api";
import CommentCard from "./CommentCard-component";
import AddComment from "./AddComment-component";

class CommentList extends Component {
  state = {
    comments: null
  };
  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return (
      <div className="comment-list">
        {comments === null ? (
          <button onClick={this.changeButton}>
            comments: {this.props.comment_count}
          </button>
        ) : (
          <>
            <AddComment
              article_id={article_id}
              displayNewComment={this.displayNewComment}
            />
            <ul>
              {comments.map(({ comment_id, ...otherCommentProps }) => {
                return <CommentCard key={comment_id} {...otherCommentProps} />;
              })}
            </ul>
          </>
        )}
      </div>
    );
  }

  changeButton = () => {
    api
      .fetchComments(this.props.article_id)
      .then(comments => this.setState({ comments }));
  };

  displayNewComment = newComment => {
    this.setState(({ comments }) => {
      return { comments: [newComment, ...comments] };
    });
  };
}

export default CommentList;
