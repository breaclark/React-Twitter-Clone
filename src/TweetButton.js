import React from "react";
import PropTypes from 'prop-types';

function TweetButton(props){
  return (
    <div className="tweet-button">
      <style>{`
        .tweet-button button {
          border: none;
          border-radius: 5px;
          font-size: 16px;
          height: 30px;
        }
      `}</style>
      <button onClick={props.onTweetButtonPush}>
      Tweet
      </button>
    </div>
  );
}

TweetButton.propTypes = {
  onTweetButtonPush: PropTypes.func
}

export default TweetButton;
