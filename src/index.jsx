import React from "react";
import ReactDOM from "react-dom";
import InputBox from './components/input.jsx'
import PostPopup from "./components/postPopup.jsx";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import  profileImg  from "./img/profile.jpg";

import { GoComment } from 'react-icons/go';
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatDuotone } from "react-icons/pi";

function Post(props){
    return (
        <div className="post">
          <div className="postHead">
            <img src={props.profileImg} width={55} height={55} alt="" />
            <div>
              <h4> {props.name} </h4>
              <div className="date"> {props.date}</div>
            </div>
          </div>
    
          <p> {props.text}</p>
    
          <img className="postImg" src={props.img} alt="" />
          <hr className="PFhr" />
          <div className="postFooter">
            <div className="button">
              < AiOutlineLike />
              Like
            </div>
            <div className="button">
            <GoComment/> Comment
            </div>
            <div className="button">
              < PiShareFatDuotone/>
             Share
            </div>
          </div>
        </div>
    );    
}

ReactDOM.render(
    <div className="mainDiv" >
      <PostPopup />
      <InputBox />
      <Post
        profileImg={profileImg}
        name="Inzamam Malik"
        date="3-Jan-2013 4:30 pm"
        img="https://images.unsplash.com/photo-1635530027421-b793c5c8d045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        text="What’s going on here? Well, at first, it just renders “Hello “ because we’re not passing a name yet. But aside from that…
          When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props.
          You might then wonder, where do props come from? How do we pass them in? Good question."
      />
      <Post
        profileImg={profileImg}
        name="Abdul Wahid"
        date="20-Jan-2013 5:00 pm"
        img="https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
      />
      <Post
        profileImg={profileImg}
        name="Shakoor"
        date="20-Jan-2013 5:00 pm"
        img="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
      />
    </div>,
    document.querySelector("#root")
  );