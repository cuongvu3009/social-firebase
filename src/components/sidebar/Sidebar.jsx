import { Link } from 'react-router-dom';

// styles & images
import './sidebar.css';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          {/* avatar & username here later */}
          <p>Hey user</p>
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
