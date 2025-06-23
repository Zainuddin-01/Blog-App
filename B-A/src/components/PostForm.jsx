import { useState } from 'react';

const PostForm = ({ initialPost = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialPost.title || '');
  const [excerpt, setExcerpt] = useState(initialPost.excerpt || '');
  const [content, setContent] = useState(initialPost.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert('Title and content are required');
    onSubmit({ title, excerpt, content });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Excerpt (optional)"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />
      <textarea
        placeholder="Write your content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
