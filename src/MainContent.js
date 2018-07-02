import React from "react";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import RightBar from "./RightBar";

function MainContent(props){
  return (
    <div className="main-content">
      <LeftBar />
      <MiddleBar tweetList={props.tweetList}/>
      <RightBar />
    </div>
  );
}

export default MainContent;
