import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import MainContent from "./MainContent";
import girl2 from './assets/girl-2.jpg';
import man from './assets/man.jpg';
import boy from './assets/boy.jpg';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      masterTweetList: [
        {
          "userName" : "Henry",
          "img" : man,
          "tweetText" : "boblawblaw this text is for you, it's a tweet"
        },
        {
          "userName" : "Bobbly",
          "img" : boy,
          "tweetText" : "things that are tweeted so twitter"
        },
        {
          "userName" : "Schmerald",
          "img" : girl2,
          "tweetText" : "text about tweeting and tweeting on twitter"
        }
      ]
    };
    this.pushTweetToList = this.pushTweetToList.bind(this);
  }

  pushTweetToList(newTweet) {
    let newTweetBlock =
    {
      "userName" : "Schmerald",
      "img" : girl2,
      "tweetText" : newTweet
    }
    var newMasterTweetList = this.state.masterTweetList.slice();
    console.log(newMasterTweetList);
    newMasterTweetList.push(newTweetBlock);
    this.setState({masterTweetList: newMasterTweetList});
  }

  render() {
    return (
      <div className="App">
        <Header pushTweetUpToList={this.pushTweetToList}/>
        <MainContent tweetList={this.state.masterTweetList}/>
      </div>
    );
  }
}

export default App;
