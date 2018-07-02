import React from "react";
import TweetBlock from "./TweetBlock";

function MiddleBar(props){
  return (
    <div className="middle-bar">
      <style>{`
        .middle-bar {
          padding: 20px;
        }
      `}</style>
      { props.tweetList.slice().reverse().map((propBlock, index) =>
          <TweetBlock userName={propBlock.userName}
            img={propBlock.img} tweetText={propBlock.tweetText}
            key={index}/>
      )}
    </div>
  );
}

export default MiddleBar;
