import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Searchbar from "./Searchbar";
import TweetButton from "./TweetButton";

function Header(){
  return (
    <div className="header">
      <Home />
      <Notifications />
      <Messages />
      <Searchbar />
      <TweetButton />
    </div>
  );
}

export default Header;
