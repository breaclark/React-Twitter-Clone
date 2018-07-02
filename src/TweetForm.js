import React from "react";
import PropTypes from 'prop-types';

class TweetForm extends React.Component {
  let _tweet = null;

  constructor(props) {
    super(props);
  }

  function handleNewTweet (event) {
    event.preventDefault();
    props.onNewTweetCreation({
      tweettext: _tweet.value
    });
    _tweet.value = '';
  }

  render() {
    return (
      <div>
        <form>
          <input
          id="tweet"
          placeholder="What's on your mind"
          ref={(input) => {_tweet = input;}}/>
          <button type="submit">Tweet!</button>
        </form>
      </div>
    );
  }
}

TweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default TweetForm;
