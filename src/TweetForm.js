import React from "react";
import PropTypes from 'prop-types';

class TweetForm extends React.Component {

  constructor(props) {
    super(props);
    let _tweet = null;
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  handleNewTweet (event) {
    event.preventDefault();
    this.props.onNewTweetCreation(this._tweet.value);
    this._tweet.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewTweet}>
          <input
          id="tweet"
          placeholder="What's on your mind"
          ref={(input) => {this._tweet = input;}}/>
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
