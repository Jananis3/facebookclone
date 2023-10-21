import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      
      <Story
        image="pic1.jpeg"
        title="Janani"
        profileSrc="dp1.png"
      />
      <Story
        image="4.jpeg"
        title="Sundhareshwar"
        profileSrc="dp6.png"/>
      <Story
        image="pic3.jpeg"
        title="Shalini"
        profileSrc="dp0.png"
      />
      <Story
        image="vijay.jpeg"
        title="Reshman"
        profileSrc="dp9.png"
      />
      <Story
        image="ha.jpg"
        title="bharath"
        profileSrc="dp6.png"
      />
      <Story
        image="https://th.bing.com/th/id/OIP.aJ1uZzv6RwE-ywKw_o8wtwHaEo?pid=Api&rs=1"
        title="Sujith"
        profileSrc="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />

      <Story
        image="sj.jpg"
        title="SJ"
        profileSrc="dp9.png"
      />
    </div>
  );
}

export default StoryReel;