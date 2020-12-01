import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Post from './Post';

function Posts() {
  const [searchInput, setSearchInput] = useState('');
  const [posts, setPosts] = useState([]);

  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  const fetchData = async (input) => {
    if (input) {
      const { data: fetchedPosts } = await axios.get(`/search/${input}`);
      setPosts(fetchedPosts);
    } else {
      const { data: fetchedPosts } = await axios.get('/posts');
      setPosts(fetchedPosts);
    }
  };

  const handleChangeOfInput = useCallback(debounce(fetchData, 500), []);

  useEffect(() => {
    handleChangeOfInput(searchInput);
  }, [searchInput]);

  return (
    <div className='posts'>
      <input
        type='text'
        className='search-input'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder='Type to search...'
      />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
