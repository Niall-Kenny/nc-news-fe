import React from "react";
import "./hompage.styles.scss";
import ContentPreview from "../../components/content-preview/ContentPreview-component";
import * as api from "../../api";

class HomePage extends React.Component {
  state = {
    topics: null,
    articles: null,
    isLoading: true
  };

  render() {
    const { articles, topics, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;
    return (
      <div className="home-page">
        <ContentPreview
          topic={topics[0].slug}
          description={topics[0].description}
          articles={articles.coding}
        />
        <ContentPreview
          topic={topics[1].slug}
          description={topics[1].description}
          articles={articles.football}
        />
        <ContentPreview
          topic={topics[2].slug}
          description={topics[2].description}
          articles={articles.cooking}
        />
      </div>
    );
  }

  componentDidMount() {
    api.fetchPreviewContent().then(previewContent => {
      const { articles, topics } = previewContent;
      this.setState({ topics, articles, isLoading: false });
    });
  }
}

export default HomePage;
