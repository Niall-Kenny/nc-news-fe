import React, { Component } from "react";
import * as api from "../../api";
import axios from "axios";
import ArticleList from "../../components/Article/ArticleList-component";
import ErrorMessage from "../Error/Error-component";
import "./userPage.styles.scss";

class UserPage extends Component {
  state = {
    userInfo: null,
    articles: null,
    message: "",
    error: false,
    isLoading: true
  };

  render() {
    const { isLoading, articles, message, error } = this.state;
    const { id } = this.props;

    if (error) {
      return <ErrorMessage message={`Opps! ${id} doesn't exist :(`} />;
    }

    if (isLoading) {
      return <p>loading...</p>;
    }

    return (
      <div className="user-page">
        <h2>{message}</h2>
        <ul>
          <ArticleList articles={articles} />
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const { id, loggedIN } = this.props;
    const username = id;

    axios
      .all([api.fetchUserInfo(username), api.fetchArticles(null, username)])
      .then(
        axios.spread((userInfo, articles) => {
          if (id === loggedIN) {
            this.setState({
              message: `Hi ${loggedIN}, here's a list of your articles:`,
              userInfo,
              articles,
              isLoading: false
            });
          } else {
            this.setState({
              message: `${userInfo.username}'s articles:`,
              userInfo,
              articles,
              isLoading: false
            });
          }
        })
      )
      .catch(err => {
        this.setState({ error: true });
      });
  }
}

export default UserPage;
