import { Link } from 'react-router-dom';

// styles & images
import './sidebar.css';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import Avatar from '../avatar/Avatar';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>
        <nav className='links'>
          <ul>
            <li>
              <Link exact to='/'>
                <MdOutlineSpaceDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='/create'>
                <GrAdd />
                <span>New Project</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
