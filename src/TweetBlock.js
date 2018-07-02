import React from "react";

function TweetBlock(props){
  return (
    <div className="tweet-block">
      <style>{`
          .tweet-block {
            align-items: center;
            background-color: #86e5fb;
            border-radius: 10px;
            display: flex;
            margin-bottom: 20px;
            padding: 10px;
          }

          img {
            border-radius: 100%;
            height: 100px;
            object-fit: cover;
            width: 100px;
          }
          p {
            margin-left: 20px;
          }
      `}</style>
      <div className="tweet-block-left">
        <p>{props.userName}</p>
        <img src={props.img} alt="person"/>
      </div>
      <p>{props.tweetText}</p>
    </div>
  );
}

export default TweetBlock;
