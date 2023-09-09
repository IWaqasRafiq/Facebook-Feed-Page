import React from "react";
import { useState  } from "react";
import "./Popup.css";
import { BsPersonCircle } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";


const Popup = ({onClose}) => {

 return (
  <div classNameName="postpopup" id="postpopup">
  <div className="edit-popup-content" id="edit-popup-content">
              <h2 className="posth4">Create Post</h2>
              <hr />
              <div className="userDetails">
                  <BsPersonCircle className="person"/>
                  <input type="text" id="username"  placeholder="username" />
              </div>
              <div className="ppost">
                  <textarea id="caption" placeholder="What's on your mind ?"></textarea>
              </div>
              <div className="postFooter"> Add to your post
                  <div className="icons">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" role="button" fill="green"
                          className="bi bi-images" viewBox="0 0 16 16">
                          <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                          <path
                              d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" role="button" fill="purple"
                          className="bi bi-camera-video" viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                      </svg>
                      <RiLiveLine className="livevTag"/>
                      <img width={18} src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt="" />
                  </div>
              </div>
              <button id="post-button" className="postbutton">Post</button>
              <button id="cancel-edit-button"
          onClick={() => {
            onClose(); // Call the provided function to close the popup
          }}
              >Cancel</button>
          </div>
      </div>
 );  
}

export default Popup;