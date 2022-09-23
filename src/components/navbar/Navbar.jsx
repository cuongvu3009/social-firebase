import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';
import './navbar.css';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <Link to='/' className='styledLink logo'>
            <FaDiscord size={35} />
            <span>The Social</span>
          </Link>
        </li>

        {!user && (
          <>
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
          </>
        )}

        {user && (
          <>
            <li>
              {!isPending && (
                <button className='btn' onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className='btn' disabled>
                  Logging out...
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
