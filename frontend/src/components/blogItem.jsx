import { useDispatch } from 'react-redux';
import { deleteBlog } from '../features/blogs/blogSlice';

const BlogItem = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <div className='blog'>
      <div>{new Date(blog.createdAt).toLocaleString('en-US')}</div>
      <h2>{blog.text}</h2>
      <h3>mobile: +91 {blog.number}</h3>
      <h3>email: {blog.email}</h3>
      <h3>amount: Rs. {blog.amount}</h3>
      <h3>items: {blog.items}</h3>

      <button onClick={() => dispatch(deleteBlog(blog._id))} className='close'>
        X
      </button>
    </div>
  );
};

export default BlogItem;
