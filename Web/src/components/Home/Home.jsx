import React, { useState } from "react";
import InputBox from "../Input/input";
import PostPopup from "../Popup/postPopup";
import {Posts, ZeroPost } from "../Posts/posts";
import "./Home.css";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [posts, setPosts] = useState([]); // Array to store posts

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const addPost = () => {
    
    setPostTitle(document.getElementById("username").value);
    setPostBody(document.getElementById("caption").value);
    // Check if both postTitle and postBody are not empty before adding the post
    if (postTitle && postBody) {
      const newPost = {
        title: postTitle,
        body: postBody,
      };
      // Add the new post to the posts array
      setPosts([...posts, newPost]);

      // Clear the input fields
      setPostTitle("");
      setPostBody("");

      // Close the popup
      closePopup();
    }
  };

  return (
    <div>
      <div className="mid-col">
        <InputBox onInputClick={openPopup} />
        {/* Use .map to render each post */}
        {posts.length === 0 ? (
          <ZeroPost />
        ) : (posts.map((post, index) => (
          <Posts key={index} postTitle={post.title} postBody={post.body} />
        )))}
        {showPopup && (
          <PostPopup
            onClose={closePopup}
            onPost={addPost}
            postTitle={postTitle}
            postBody={postBody}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
