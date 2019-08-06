import React, { Component } from "react";
import * as api from "../../../api";
import CommentList from "./CommentList-component";

class ArticlePage extends Component {
  state = {
    article: null,
    isLoading: true
  };
  render() {
    const { isLoading, article } = this.state;

    if (isLoading) {
      return <p>loading....</p>;
    }
    return (
      <div className="article-page">
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <p>Published By: {article.author}</p>

        <button>UP vote</button>
        <button>DOWN vote</button>
        <span>Votes: {article.votes}</span>
        <CommentList {...article} />
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props;
    api
      .fetchArticle(id)
      .then(article => this.setState({ article, isLoading: false }));
  }

  displayComments = () => {};
}

export default ArticlePage;
