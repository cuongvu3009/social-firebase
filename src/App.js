import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Sidebar from './components/sidebar/Sidebar';
import { useAuthContext } from './hooks/useAuthContext';
import NotFound from './pages/NotFound';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <Sidebar />
          <div className='container'>
            <Navbar />
            <Routes>
              {user && <Route path='/' element={<Dashboard />} />}
              {!user && (
                <Route path='/' element={<Navigate replace to='/login' />} />
              )}
              {user && <Route path='/create' element={<Create />} />}
              {!user && (
                <Route
                  path='/create'
                  element={<Navigate replace to='/login' />}
                />
              )}
              {user && <Route path='/projects/:id' element={<Project />} />}
              {!user && (
                <Route
                  path='/projects/:id'
                  element={<Navigate replace to='/login' />}
                />
              )}

              {user && (
                <Route path='/login' element={<Navigate replace to='/' />} />
              )}
              {!user && <Route path='/login' element={<Login />} />}
              {user && (
                <Route path='/signup' element={<Navigate replace to='/' />} />
              )}
              {!user && <Route path='/signup' element={<Signup />} />}

              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
