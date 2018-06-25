import React from "react";

function TweetBlock(){
  return (
    <div className="tweet-block">
      <p>Tweet thang</p>
      <img src={require("./assets/girl.jpg")} alt="girl"/>
      <p>Ut enim ad minim veniam, quis nostrud exercitation</p>
    </div>
  );
}

export default TweetBlock;