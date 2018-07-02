import React from "react";

function User(props){
  return (
    <div className="user">
      <p>{props.username}</p>
      <img src={props.img} alt="person"/>
      <p>{props.tagline}</p>
      <p>{props.about}</p>
    </div>
  );
}

export default User;
