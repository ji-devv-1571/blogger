const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a Name'],
    },
    amount: {
      type: Number,
      required: [true],
    },
    number: {
      type: Number,
      required: [false],
    },
    email: {
      type: String,
      required: [false],
    },
    items: {
      type: String,
      required: [false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Blog', blogSchema);
