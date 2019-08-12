import React, { Component } from "react";
import * as api from "../../api";
import ArticleList from "../../components/Article/ArticleList-component";

class TopicsPage extends Component {
  state = {
    articles: null,
    isLoading: true
  };

  render() {
    const { topic } = this.props;
    const { isLoading, articles } = this.state;
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
    api.fetchArticles(null, null, topic).then(articlesByTopic => {
      this.setState({ articles: articlesByTopic, isLoading: false });
    });
  }
}

export default TopicsPage;
