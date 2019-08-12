import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../../components/Article/ArticleList-component";
import ErrorMessage from "../Error/Error-component";

class TopicsPage extends Component {
  state = {
    articles: null,
    error: false,
    isLoading: true
  };

  render() {
    const { topic } = this.props;
    const { isLoading, articles, error } = this.state;
    if (error) return <ErrorMessage />;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <h1>{topic}</h1>
        <ArticleList articles={articles} />
      </div>
    );
  }
  componentDidMount() {
    const { topic } = this.props;
    api
      .fetchArticles(null, null, topic)
      .then(articlesByTopic => {
        this.setState({ articles: articlesByTopic, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }
}

export default TopicsPage;
