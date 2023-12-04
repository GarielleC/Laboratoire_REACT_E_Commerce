import './App.scss'
import {Outlet} from 'react-router-dom';
import Navbar from './router/Navbar/navbar.jsx';

function App() {

  return (
    <main>
      <div className="App">
        <Navbar /> 
        <Outlet />
        <footer>
          <p>&copy; 2023 Rc Land</p>
        </footer>
      </div>
    </main>
  );
}

export default App;

