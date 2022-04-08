import { IoLogInOutline, IoLogOutOutline, IoPerson } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>BlogJI.io</Link>
        <Link className='nav' to='/about'>
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
