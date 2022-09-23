import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <Link to='/' className='styledLink logo'>
            <FaDiscord size={35} />
            <span>The Dojo</span>
          </Link>
        </li>

        <li>
          <Link to='/login' className='styledLink'>
            Login
          </Link>
        </li>
        <li>
          <Link to='/signup' className='styledLink'>
            Signup
          </Link>
        </li>
        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
