import React from "react";
import "./Feed.css";
import './App.jsx';

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="dp0.png"
        image="pic1.jpeg"
        message="message"
        timestamp="timestamp"
        username="Janani"
      />
       <Post
        profilePic="dp1.png"
        image="pic2.jpeg"
        message="message"
        timestamp="timestamp"
        username="Janani"
      />
      <Post
        profilePic="dp1.png"
        image="4.jpeg"
        message="message"
        timestamp="timestamp"
        username="Janani"
      />
      <Post
        profilePic="dp1.png"
        image="pic3.jpeg"
        message="message"
        timestamp="timestamp"
        username="Janani"
      />
      <Post
        profilePic="dp3.png"
        image="pic4.jpeg"
        message="message"
        timestamp="timestamp"
        username="Janani"
      />
      
      <Post />
      <Post />
    </div>
  );
}

export default Feed;