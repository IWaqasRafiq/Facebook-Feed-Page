import React from "react";
import "../styles.css";

function popup (props) {
 return (
        <div className="postpopup" role="dailog" id="postpopup">
          <div className="edit-popup-content">
          <h4 className="posth4">Create Post</h4>
          <hr />
          <img className="profile" src={props.profileImg} width={55} height={55} alt="" />
          <input type="text" id="edit-username" placeholder="username"/>
          <textarea id="edit-caption" placeholder="caption"></textarea>
          <button id="save-edit-button">Save</button>
          <button id="cancel-edit-button">Cancel</button>
        </div>
        </div>
 );  
}

export default popup;