import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../context/PostContex';
import '../App.css'

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <p>Post not found</p>;

  return (
     <div className="post-details">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-content">{post.content}</p>
    </div>
  );
};

export default PostDetails;
