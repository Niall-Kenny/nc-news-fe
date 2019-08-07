import React, { Component } from "react";
import * as api from "../../../api";

class Voter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div className="votes">
        <button
          name="increment vote count"
          disabled={voteChange === 1}
          onClick={() => this.handleClick(1)}
        >
          UP vote
        </button>
        <button
          disabled={voteChange === -1}
          name="decrement vote count"
          onClick={() => this.handleClick(-1)}
        >
          DOWN vote
        </button>
        <span>Votes: {votes + voteChange}</span>
      </div>
    );
  }

  handleClick = num => {
    const { article_id } = this.props;
    this.setState(({ voteChange }) => {
      return { voteChange: (voteChange += num) };
    });
    api.incrementVoteCount(article_id, num);
  };
}

export default Voter;
