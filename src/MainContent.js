import React from "react";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import RightBar from "./RightBar";

function MainContent(){
  return (
    <div className="main-content">
      <LeftBar />
      <MiddleBar />
      <RightBar />
    </div>
  );
}

export default MainContent;
