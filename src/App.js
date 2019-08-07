import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/pages/hompage/HomePage-component";
import FeedPage from "./components/pages/Feed/FeedPage";
import ArticlePage from "./components/pages/Article/ArticlePage-component";

class App extends React.Component {
  state = {
    username: "tickle122"
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <HomePage path="/" />
          <FeedPage path="/feed" />
          <ArticlePage username={this.state.username} path="/feed/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
