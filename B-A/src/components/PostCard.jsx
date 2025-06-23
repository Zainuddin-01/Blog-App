// src/components/PostCard.jsx
import { Link } from 'react-router-dom';
import '../App.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-actions">
        <Link to={`/post/${post.id}`} className="read-more-link">Read More</Link>
        <Link to={`/edit/${post.id}`} className="edit-post-link">Edit Post</Link>
      </div>
    </div>
  );
};

export default PostCard;
