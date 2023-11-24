import './App.scss'
import {Outlet} from 'react-router-dom';
import Navbar from './router/Navbar/navbar.jsx';

function App() {

  return (
    <main>
      <div className="App">
        <Navbar /> 
        <Outlet />
      </div>
    </main>
  );
}

export default App;

