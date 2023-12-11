import './App.scss';
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './router/Navbar/navbar.jsx';
import Login from './components/Compte/Login/Login.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <div className="body">

        <main>
          <div className="App">
            <Navbar />
            <Outlet />
            <footer>
              <p>&copy; 2023 Rc Land</p>
            </footer>
          </div>
        </main>

    </div>
  );
}

export default App;



