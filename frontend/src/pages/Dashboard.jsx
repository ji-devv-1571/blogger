import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import BlogForm from '../components/blogForm';
import BlogItem from '../components/blogItem';
import Spinner from '../components/Spinner';
import { getBlogs, reset } from '../features/blogs/blogSlice';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getBlogs());

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome JI_DEvv</h1>
        <p>Blog Dashboard</p>
      </section>
      <BlogForm />

      <section className='content'>
        {blogs.length > 0 ? (
          <div className='blogs'>
            {blogs.map((blog) => (
              <BlogItem key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <h3>You have no blogs to show</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
