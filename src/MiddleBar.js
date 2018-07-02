import React from "react";
import TweetBlock from "./TweetBlock";

function MiddleBar(props){
  return (
    <div className="middleBar">
      { props.tweetList.slice().reverse().map((propBlock, index) =>
          <TweetBlock userName={propBlock.userName}
            img={propBlock.img} tweetText={propBlock.tweetText}
            key={index}/>
      )}
    </div>
  );
}

export default MiddleBar;
