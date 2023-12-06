import './App.scss'
import {Outlet} from 'react-router-dom';
import Navbar from './router/Navbar/navbar.jsx';
import './App.scss'

function App() {

  return (
    <div className='body'>
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

