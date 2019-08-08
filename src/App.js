import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/hompage/HomePage-component";
import FeedPage from "./pages/Feed/FeedPage";
import ArticlePage from "./pages/Article/ArticlePage-component";
import UserPage from "./pages/User/userPage-component";

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
          <FeedPage path="/feed" />
          <ArticlePage path="/feed/:id" loggedIN={loggedIN} />
          <UserPage path="/profile" loggedIN={loggedIN} />
        </Router>
      </div>
    );
  }
}

export default App;
