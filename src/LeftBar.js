import React from "react";
import User from "./User";

function LeftBar(props){
  return (
    <div className="left-bar">
      <User
        username={props.username}
        img={props.img}
        tagline={props.tagline}
        about={props.about} />
    </div>
  );
}

export default LeftBar;
