import React from "react";

class TweetForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="What's on your mind"/>
          <button type="submit">Tweet!</button>
        </form>
      </div>
    );
  }
}

export default TweetForm;
