import { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  // Load posts from localStorage when app starts
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    return storedPosts ? JSON.parse(storedPosts) : [];
  });

  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts(prev => [...prev, post]);
  };

  const updatePost = (updatedPost) => {
    setPosts(prev =>
      prev.map(post => post.id === updatedPost.id ? updatedPost : post)
    );
  };

  const deletePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
