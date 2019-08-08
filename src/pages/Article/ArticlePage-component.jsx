import React, { Component } from "react";
import * as api from "../../api";
import CommentList from "../../components/Article/comments/CommentList-component";
import Voter from "../../components/voting/Voter-component";

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
        <CommentList {...article} loggedIN={this.props.loggedIN} />
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
