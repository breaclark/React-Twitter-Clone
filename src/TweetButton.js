import React from "react";
import PropTypes from 'prop-types';

function TweetButton(props){
  return (
    <div>
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
