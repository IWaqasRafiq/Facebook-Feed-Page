import React from "react";
import "./Input.css";
import { RiLiveLine } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";


function Input() {
  return (
    <Card maxW="md">
    <div className="MInputDiv">
      <div className="inputDiv">
        <form className="inputForm">
            <button className="inputButton">
            <div className="buttonText">What's on your mind ?</div>
            </button>
        </form>
      </div>
      <hr />
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
      </Card>
  );
}
export default Input;
