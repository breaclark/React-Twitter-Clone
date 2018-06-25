import React from "react";

function User(){
  return (
    <div className="user">
      <p>Brea B</p>
      <img src={require("./assets/girl.jpg")} alt="girl"/>
      <p>Hello this is Brea</p>
      <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default User;
