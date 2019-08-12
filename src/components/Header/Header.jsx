import React from "react";
import { Link } from "@reach/router";
import "./Header.styles.scss";

const Header = ({ loggedIN }) => {
  return (
    <div className="header">
      <nav className="nav-bar">
        <div>
          <Link to="/" className="option">
            HOME
          </Link>
          <Link to="/feed" className="option">
            FEED
          </Link>
        </div>

        <Link to="/" className="nc-news-btn">
          NC-News
        </Link>

        <div className="loggedIN">
          <Link to={`/user/${loggedIN}`} className="option">
            {loggedIN}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
