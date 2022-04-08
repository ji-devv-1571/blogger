import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createBlog } from '../features/blogs/blogSlice';

const BlogForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState([]);
  const [number, setNumber] = useState([]);
  const [email, setEmail] = useState('N/A');
  const [items, setItems] = useState('N/A');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog({ text, amount, number, email, items }));
    setText('');
    setAmount([]);
    setNumber([]);
    setEmail('');
    setItems('');
  };

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Name</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            placeholder='Enter name'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='number'>Mobile number</label>
          <input
            type='text'
            name='number'
            id='text'
            value={number}
            placeholder=' 10 digit mobile number without +91'
            onChange={(e) => setNumber(e.target.value)}
          />
          <h5>digit(10 digit): {number.length}</h5>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>email</label>
          <input
            type='text'
            name='email'
            id='text'
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            name='amount'
            id='text'
            value={amount}
            placeholder='amount in number'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='items'>Items</label>
          <input
            type='text'
            name='items'
            id='text'
            value={items}
            placeholder='item names | example: item1, item2'
            onChange={(e) => setItems(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Blog
          </button>
        </div>
      </form>
    </section>
  );
};

export default BlogForm;
