import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/pages/hompage/HomePage-component";
import FeedPage from "./components/pages/Feed/FeedPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
        <FeedPage path="/feed" />
      </Router>
    </div>
  );
}

export default App;
