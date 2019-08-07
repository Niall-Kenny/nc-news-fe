import React, { Component } from "react";
import * as api from "../../../api";
import CommentList from "../../Article-components/comments/CommentList-component";
import Voter from "../../voting/Voter-component";

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

        <Voter
          votes={article.votes}
          endpoint="articles"
          article_id={article.article_id}
        />
        <CommentList {...article} username={this.props.username} />
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props;
    api
      .fetchArticle(id)
      .then(article => this.setState({ article, isLoading: false }));
  }
}

export default ArticlePage;
