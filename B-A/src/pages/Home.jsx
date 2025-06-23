import { useContext } from 'react';
import { PostContext } from '../context/PostContex';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
  const { posts, deletePost, clearPosts } = useContext(PostContext);

  return (
    <div className="home">
      <h1>All Blog Posts</h1>

      {posts.length > 0 ? (
        <>
          <div className="post-list">
            {posts.map((post) => (
              <div className="post-card" key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-actions">
                  <Link to={`/post/${post.id}`}>Read More</Link>
                  <Link to={`/edit/${post.id}`}>Edit</Link>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          {/* <button className="clear-btn" onClick={clearPosts}>🗑️ Clear All Posts</button> */}
        </>
      ) : (
        <p>No posts yet.</p>
      )}

      <Link to="/create" className="create-post-link">+ Create New Post</Link>
    </div>
  );
};

export default Home;
