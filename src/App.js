import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/pages/hompage/HomePage-component";
import FeedPage from "./components/pages/Feed/FeedPage";
import ArticlePage from "./components/pages/Article/ArticlePage-component";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <FeedPage path="/feed" />
        <ArticlePage path="/feed/:id" />
      </Router>
    </div>
  );
}

export default App;
