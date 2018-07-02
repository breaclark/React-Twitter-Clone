import React from "react";
import TweetBlock from "./TweetBlock";
import girl2 from './assets/girl-2.jpg';
import man from './assets/man.jpg';
import boy from './assets/boy.jpg';

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
