import PostForm from '../components/PostForm';
import { useContext } from 'react';
import { PostContext } from '../context/PostContex';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleCreate = (data) => {
    const newPost = { id: Date.now(), ...data };
    addPost(newPost);
    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <h1>Create New Post</h1>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePost;
