import React from "react";

function TweetBlock(props){
  return (
    <div className="tweet-block">
      <style>{`
          img {
            height: 100px;
            width: 100px;
            border-radius: 100%;
            object-fit: cover;
          }
      `}</style>
      <p>{props.userName}</p>
      <img src={props.img} alt="person"/>
      <p>{props.tweetText}</p>
    </div>
  );
}

export default TweetBlock;
