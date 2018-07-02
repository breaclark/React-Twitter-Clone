import React from "react";
import PropTypes from 'prop-types';

class TweetForm extends React.Component {

  constructor(props) {
    super(props);
    this._tweet = null;
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  handleNewTweet (event) {
    event.preventDefault();
    this.props.onNewTweetCreation(this._tweet.value);
    this._tweet.value = '';
  }

  render() {
    return (
      <div className="tweet-form">
        <style>{`
          .tweet-form {
            background-color: #86e5fb;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            margin: 20px;
            padding: 10px;
            width: 100%;
          }

          input {
            font-size: 16px;
            height: 30px;
            width: 200px;
          }

          button {
            border: none;
            border-radius: 5px;
            font-size: 16px;
            height: 30px;
            margin-left: 20px;
          }
        `}</style>
        <form onSubmit={this.handleNewTweet}>
          <input
          id="tweet"
          placeholder="What's on your mind?"
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
