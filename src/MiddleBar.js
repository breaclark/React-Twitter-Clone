import React from "react";
import TweetBlock from "./TweetBlock";
import girl2 from './assets/girl-2.jpg';
import man from './assets/man.jpg';
import boy from './assets/boy.jpg';

function MiddleBar(){

  let array = [
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
  return (
    <div className="middleBar">
      { array.map((propBlock, index) =>
          <TweetBlock userName={propBlock.userName}
            img={propBlock.img} tweetText={propBlock.tweetText}
            key={index}/>
      )}
    </div>
  );
}

export default MiddleBar;
