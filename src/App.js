import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Project from './pages/Project';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/projects/:id' element={<Project />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
