import React from "react";
import "./Input.css";
import { RiLiveLine } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { Card, Divider } from "@chakra-ui/react";


function Input() {
  return (
<<<<<<< HEAD
    <Card minW="lg">
=======
    <Card maxW="md">
>>>>>>> 85783ce2511d226fdf6ef7c56720302d4ee56f67
    <div className="MInputDiv">
      <div className="inputDiv">
        <form className="inputForm">
            <button className="inputButton">
            <div className="buttonText">What's on your mind ?</div>
            </button>
        </form>
      </div>
      <Divider
      color="blue.900"
       />
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
<<<<<<< HEAD
    </Card>
=======
      </Card>
>>>>>>> 85783ce2511d226fdf6ef7c56720302d4ee56f67
  );
}
export default Input;
