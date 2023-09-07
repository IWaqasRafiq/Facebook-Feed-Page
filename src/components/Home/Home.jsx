import React from "react";
import InputBox from "../Input/input";
import PostPopup from "../Popup/postPopup";
import Posts from "../Posts/posts";
import "./Home.css";

const Home = () => {
  return (
    <div>
    <div className="mid-col">
      <InputBox />
      <Posts />
      <PostPopup />
    </div>
    </div>
  );
};


export default Home;
