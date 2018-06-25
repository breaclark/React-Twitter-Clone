import React from "react";
import TweetBlock from "./TweetBlock";

function MiddleBar(){
  
  let array = [
    {
      "userName" : "Henry",
      "tweetText" : "boblawblaw"
    },
    {
      "userName" : "Bobbly",
      "tweetText" : "boblawblaw"
    },
    {
      "userName" : "Schmerald",
      "tweetText" : "boblawblaw"
    }
  ]
  return (
    <div className="middleBar">
      { array.map((propBlock) =>
          <TweetBlock userName={propBlock.userName} tweetText={propBlock.tweetText}/>
      )}
    </div>
  );
}

export default MiddleBar;