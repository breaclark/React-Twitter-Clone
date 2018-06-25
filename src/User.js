import React from "react";

function User(){
  return (
    <div className="user">
      <p>Brea B</p>
      <img src={require("./assets/girl.jpg")} alt="girl"/>
      <p>Hello this is Brea</p>
    </div>
  );
}

export default User;
