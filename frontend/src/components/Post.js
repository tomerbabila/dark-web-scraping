import React from 'react';
import '../styles/Post.css';

function Post({ post }) {
  return (
    <div className='post'>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <div className='footer'>
        <span>Author: {post.author}</span>
        <span>Date: {post.date}</span>
      </div>
    </div>
  );
}

export default Post;
