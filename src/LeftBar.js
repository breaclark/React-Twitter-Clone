import React from "react";
import User from "./User";

function LeftBar(props){
  return (
    <div className="left-bar">
      <style>{`
        .left-bar {
          background-color: #86e5fb;
          border-radius: 10px;
          color: white;
          margin: 20px;
          padding: 20px;
          text-align: left;
        }
      `}</style>
      <User
        username={props.username}
        img={props.img}
        tagline={props.tagline}
        about={props.about} />
    </div>
  );
}

export default LeftBar;
