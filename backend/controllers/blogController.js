const asyncHandler = require('express-async-handler');
// import axios from 'axios';

// const API_URL = process.env.MONGO_URI;

const Blog = require('../models/blogModel');

// @desc    Get blogs
// @route   GET /api/blogs
// @access  Private
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json(blogs);
});

// @desc    Set blog
// @route   POST /api/blogs
// @access  Private
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  if (!req.body.amount) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  if (!req.body.number) {
    res.status(400);
    throw new Error('Please add mobile number');
  }
  if (!req.body.items) {
    res.status(400);
    throw new Error('Please add a item');
  }
  if (!req.body.email) {
    res.status(400);
    throw new Error('Please add an email');
  }

  const blog = await Blog.create({
    text: req.body.text,
    amount: req.body.amount,
    number: req.body.number,
    email: req.body.email,
    items: req.body.items,
  });

  res.status(200).json(blog);
});

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error('Blog not found');
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBlog);
});

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error('Blog not found');
  }
  // Make sure the logged in user matches the blog user
  await blog.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
