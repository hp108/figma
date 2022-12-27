import Signup from './components/Signup';
import Signin from './components/Signin';
import Forgot from './components/Forgot';
import Dashboard from './components/dashboard/Dashboard';
import { Routes,Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">

<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <Link className="navbar-brand navlnk" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link className="nav-link navlnk " to="/">Signup </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navlnk" to="/signin">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navlnk" to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </div>
</nav>
      <Routes>
        <Route path='/' element={<Signup></Signup>}>
        </Route>
        <Route path='/signin' element={<Signin></Signin>}>
        </Route>
        <Route path='/forgot' element={<Forgot></Forgot>}>
        </Route>
        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
