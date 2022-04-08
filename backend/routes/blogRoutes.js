const express = require('express');
const router = express.Router();
const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

router.route('/').get(getBlogs).post(setBlog);
router.route('/:id').delete(deleteBlog).put(updateBlog);

module.exports = router;
