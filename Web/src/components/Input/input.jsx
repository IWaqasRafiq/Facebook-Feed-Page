import React from "react";
import "./Input.css";
import { RiLiveLine } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Card, Divider } from "@chakra-ui/react";

const Input = ({ onInputClick }) => {
  return (
    <>
      <Card minW="lg">
        <div className="MInputDiv">
          <div className="inputDiv">
            <form className="inputForm">
              <button
                className="inputButton"
                onClick={(e) => {
                  e.preventDefault();
                  onInputClick();
                }}
              >
                <div className="buttonText">What's on your mind ?</div>
              </button>
            </form>
          </div>
          <Divider color="blue.900" />
          <div className="inputFooter">
            <div
              className="inputIcon"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                onInputClick();
              }}
            >
              <RiLiveLine className="live" />
              Live Video
            </div>
            <div
              className="inputIcon"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                onInputClick();
              }}
            >
              <FaPhotoVideo className="pv" />
              Photo/Video
            </div>
            <div
              className="inputIcon"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                onInputClick();
              }}
            >
              <MdOutlineEmojiEmotions className="emoji" />
              Feeling/Activity
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Input;
