import React from "react";
import "./hompage.styles.scss";
import ContentPreview from "../../components/content-preview/ContentPreview-component";

class HomePage extends React.Component {
  state = {
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life"
      },
      {
        slug: "football",
        description: "FOOTIE!"
      },
      {
        slug: "cooking",
        description: "Hey good looking, what you got cooking?"
      }
    ],
    articles: {
      cooking: [
        {
          author: "weegembump",
          title: "Seafood substitutions are increasing",
          votes: 0,
          comment_count: "6"
        },
        {
          author: "happyamy2016",
          title: "High Altitude Cooking",
          votes: 0,
          comment_count: "5"
        }
      ]
    },
    football: [
      {
        author: "weegembump",
        title:
          "What does Jose Mourinho's handwriting say about his personality?",
        votes: 0,
        comment_count: "6"
      },
      {
        author: "grumpy19",
        title:
          "The People Tracking Every Touch, Pass And Tackle in the World Cup",
        votes: 0,
        comment_count: "8"
      }
    ],
    coding: [
      {
        author: "grumpy19",
        title:
          "JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals",
        votes: 0,
        comment_count: "11"
      },
      {
        author: "jessjelly",
        title: "Making sense of Redux",
        votes: 0,
        comment_count: "9"
      }
    ]
  };

  render() {
    const { articles, topics } = this.state;
    return (
      <div className="home-page">
        {topics.map(({ slug, description }) => {
          return (
            <ContentPreview key={slug} topic={slug} description={description} />
          );
        })}
      </div>
    );
  }
}

export default HomePage;
