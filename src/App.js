import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/Homepage/HomePage-component";
import FeedPage from "./pages/Feed/FeedPage";
import ArticlePage from "./pages/Article/ArticlePage-component";
import ErrorMessage from "./pages/Error/Error-component";
import TopicsPage from "./pages/topics/TopicsPage-component";
import UserPage from "./pages/User/UserPage-component";

class App extends React.Component {
  state = {
    loggedIN: "tickle122"
  };

  render() {
    const { loggedIN } = this.state;

    return (
      <div className="App">
        <Header loggedIN={loggedIN} />
        <Router>
          <HomePage path="/" />
          <TopicsPage path="/topics/*" />
          <TopicsPage path="/topics/:topic" />
          <FeedPage path="/feed" />
          <ArticlePage path="/feed/:id" loggedIN={loggedIN} />
          <UserPage path="/user/:id" loggedIN={loggedIN} />
          <ErrorMessage path="/*" />
        </Router>
      </div>
    );
  }
}

export default App;
