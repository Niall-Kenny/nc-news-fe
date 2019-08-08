import React, { Component } from "react";
import * as api from "../../api";
import axios from "axios";
import ArticleList from "../../components/Article/ArticleList-component";

class UserPage extends Component {
  state = {
    userInfo: null,
    articles: null
  };

  render() {
    const { userInfo, articles } = this.state;

    if (userInfo === null) {
      return <p>loading...</p>;
    }
    return (
      <div>
        <h2>Hi {userInfo.name}, here's a list of your articles:</h2>
        <ul>
          <ArticleList articles={articles} />
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const { loggedIN } = this.props;
    axios
      .all([api.fetchUserInfo(loggedIN), api.fetchArticles(null, loggedIN)])
      .then(
        axios.spread((userInfo, articles) => {
          this.setState({ userInfo, articles });
        })
      );
  }
}

export default UserPage;
