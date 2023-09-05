import React from "react";
import InputBox from "../Input/input";
import PostPopup from "../Popup/postPopup";
import Posts from "../Posts/posts";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <InputBox />
      <Posts />
      <PostPopup />
    </div>
  );
};


export default Home;
