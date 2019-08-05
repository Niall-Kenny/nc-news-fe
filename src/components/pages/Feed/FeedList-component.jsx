import React, { Component } from "react";
import ArticlePreview from "../../Article-components/ArticlePreview-component";

class FeedList extends Component {
  state = {
    articles: [
      {
        author: "weegembump",
        title: "Seafood substitutions are increasing",
        article_id: 33,
        topic: "cooking",
        body:
          "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
        created_at: "2018-05-30T16:59:13.341Z",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "happyamy2016",
        title: "High Altitude Cooking",
        article_id: 28,
        topic: "cooking",
        body:
          "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.",
        created_at: "2018-05-27T04:32:28.514Z",
        votes: 0,
        comment_count: "5"
      }
    ]
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="feed-list">
        <ul>
          {articles.map(({ article_id, ...otherArticleProps }) => {
            return <ArticlePreview key={article_id} {...otherArticleProps} />;
          })}
        </ul>
      </div>
    );
  }
}

export default FeedList;
