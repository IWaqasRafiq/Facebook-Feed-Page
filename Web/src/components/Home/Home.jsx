import React from "react";
import InputBox from "../Input/input";
import PostPopup from "../Popup/postPopup";
import Posts from "../Posts/posts";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
    <div className="mid-col">
        <InputBox onInputClick={openPopup} />
        <Posts />
        {showPopup && <PostPopup onClose={closePopup} />}
    </div>
    </div>
  );
};


export default Home;
