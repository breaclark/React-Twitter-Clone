import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Searchbar from "./Searchbar";
import TweetButton from "./TweetButton";
import TweetForm from "./TweetForm";

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      tweetButtonPushed: false
    };
    this.handleTweetButtonPush = this.handleTweetButtonPush.bind(this);
    this.addNewTweet = this.addNewTweet.bind(this);
  }

  handleTweetButtonPush() {
    this.setState({tweetButtonPushed: true});
  }

  addNewTweet(newTweet) {
    this.props.pushTweetUpToList(newTweet);
  }

  render() {
    let tweetForm = null;
    if(this.state.tweetButtonPushed) {
      tweetForm = <TweetForm onNewTweetCreation={this.addNewTweet}/>;
    }
    return (
      <div>
        <div className="header">
          <style>{`
              .header {
                background-color: #86e5fb;
                border-bottom: 3px solid #bdedf9;
                color: white;
                display: flex;
                justify-content: space-around;
                width: 100%;
              }
          `}</style>
          <Home />
          <Notifications />
          <Messages />
          <Searchbar />
          <TweetButton onTweetButtonPush={this.handleTweetButtonPush} />
        </div>
        <div>
          {tweetForm}
        </div>
      </div>
    );
  }

}

export default Header;
