import React from "react";
import { Link } from "@reach/router";
import "./Header.styles.scss";

const Header = ({ loggedIN }) => {
  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/" className="nav-btn">
          HOME
        </Link>
        <Link to="/feed" className="nav-btn">
          FEED
        </Link>
        <Link to="/" className="nc-news-btn">
          NC-News
        </Link>
        <Link to="/profile" className="logged-in">
          {loggedIN}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
