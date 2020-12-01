import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const { data: fetchedPosts } = await axios.get('/posts');
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
