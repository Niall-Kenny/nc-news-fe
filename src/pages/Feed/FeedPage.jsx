import React from "react";
import ArticleList from "../../components/Article/ArticleList-component";
import * as api from "../../api";
import SortBy from "../../components/SortBy/SortBy-component";
import "./feedPage.styles.scss";
class FeedPage extends React.Component {
  state = {
    articles: null,
    error: null,
    isLoading: true
  };
  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="feed-page">
        <SortBy updateSortOrder={this.updateSortOrder} />

        <ArticleList articles={articles} />
      </div>
    );
  }

  componentDidMount() {
    api.fetchArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }
  updateSortOrder = sortBy => {
    api.fetchArticles(sortBy).then(articles => {
      this.setState({ articles });
    });
  };
}

export default FeedPage;
