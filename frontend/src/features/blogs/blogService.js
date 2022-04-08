import axios from 'axios';

const API_URL = '/api/blogs/';

// Create new blog
const createBlog = async (blogData) => {
  const response = await axios.post(API_URL, blogData);

  return response.data;
};

// Get user blogs
const getBlogs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete user blog
const deleteBlog = async (blogId) => {
  const response = await axios.delete(API_URL + blogId);

  return response.data;
};

const blogService = {
  createBlog,
  getBlogs,
  deleteBlog,
};

export default blogService;
