import React from "react";
import "./styles.css";
import { RiLiveLine } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";


function input() {
  return (
    <div className="MInputDiv">
      <div className="inputDiv">
        <form className="inputForm">
          <input
            className="input"
            type="text"
            placeholder={`What's on your mind.`}
          />
        </form>
      </div>

      <div className="inputFooter">
        <div className="inputIcon">
          <RiLiveLine className="live"/>
          Live Video
        </div>
        <div className="inputIcon">
            <FaPhotoVideo className="pv"/>
          Photo/Video
        </div>
        <div className="inputIcon">
            <MdOutlineEmojiEmotions  className="emoji"/>
          Feeling/Activity
        </div>
      </div>
    </div>
  );
}
export default input;
