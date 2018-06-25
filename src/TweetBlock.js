import React from "react";

function TweetBlock(props){
  return (
    <div className="tweet-block">
      <p>{props.userName}</p>
      <img src={require("./assets/girl.jpg")} alt="girl"/>
      <p>{props.tweetText}</p>
    </div>
  );
}

export default TweetBlock;