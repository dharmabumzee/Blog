import React from "react";
import PostList from "./PostList";
import BlogHeader from "./BlogHeader";

const App = () => {
  return (
    <div className="ui container">
      <BlogHeader />
      <PostList />
    </div>
  );
};

export default App;
