import React from "react";
import TweetBlock from "./TweetBlock";

function MiddleBar(){
  let array = [];
  for(let i=0; i<3; i++) {
    array.push(
      <div className="middle-bar">
        <TweetBlock />
      </div>
    );
  }
  return array;
}

export default MiddleBar;