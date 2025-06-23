import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../context/PostContex';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = useContext(PostContext);
  const post = posts.find(p => p.id.toString() === id);

  if (!post) return <p>Post not found</p>;

  const handleUpdate = (data) => {
    const updated = { ...data, id: post.id };
    updatePost(updated);
    navigate('/');
  };

  return (
     <div className="page-wrapper">
      <h1>Edit Post</h1>
      <PostForm initialPost={post} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditPost;
