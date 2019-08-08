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
    const { article_id, loggedIN } = this.props;

    return (
      <div className="comment-list">
        {comments === null ? (
          <button onClick={this.changeCommentButton}>
            comments: {this.props.comment_count}
          </button>
        ) : (
          <>
            <AddComment
              article_id={article_id}
              displayNewComment={this.displayNewComment}
              loggedIN={loggedIN}
            />
            <ul>
              {comments.map(({ comment_id, ...otherCommentProps }) => {
                return (
                  <CommentCard
                    handleDelete={this.handleDelete}
                    key={comment_id}
                    loggedIN={loggedIN}
                    comment_id={comment_id}
                    {...otherCommentProps}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }

  changeCommentButton = () => {
    api
      .fetchComments(this.props.article_id)
      .then(comments => this.setState({ comments }));
  };

  displayNewComment = newComment => {
    this.setState(({ comments }) => {
      return { comments: [newComment, ...comments] };
    });
  };

  handleDelete = comment_id => {
    api.deleteComment(comment_id);
    this.setState(({ comments }) => {
      return {
        comments: comments.filter(comment => comment.comment_id !== comment_id)
      };
    });
  };
}

export default CommentList;
