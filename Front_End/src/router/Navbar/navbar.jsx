import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <ul className="main">
    <li>
      <div className="logo">
        <img src="../src/Images/LOGO.png"  />
      </div>
      </li>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/News">Nouveautés</Link></li>
      <li><Link to="/About">À propos</Link></li>
      <li className="main__el">
        <Link to="/Pages/Drones">Drones FPV</Link>
        <ul className="drop menu1">
          <li><Link to="/Pages/Drones/Antennes">Antennes</Link></li>
          <li><Link to="/Pages/Drones/Batteries">Batteries</Link></li>
          <li><Link to="/Pages/Drones/Cameras_FPV">Caméras</Link></li>
          <li><Link to="/Pages/Drones/Chassis_FPV">Châssis</Link></li>
          <li><Link to="/Pages/Drones/ESC_FPV">ESC</Link></li>
          <li><Link to="/Pages/Drones/FC">FC</Link></li>
          <li><Link to="/Pages/Drones/Moteurs">Moteurs</Link></li>
          <li><Link to="/Pages/Drones/Radios_FPV">Radios</Link></li>
          <li><Link to="/Pages/Drones/Recepteurs">Récepteurs</Link></li>
          <li><Link to="/Pages/Drones/Systemes_videos">Systèmes Vidéos</Link></li>
          
        </ul>
      </li>
      <li>
        <Link to="/Remote_Controlled">Voitures télécommandées</Link>
        <ul className="drop menu2">
          <li><Link to="/Remote_Controlled/Batteries">Batteries</Link></li>
          <li><Link to="/Remote_Controlled/Cameras">Caméras</Link></li>
          <li><Link to="/Remote_Controlled/Chassis">Châssis</Link></li>
          <li><Link to="/Remote_Controlled/ESC">ESC</Link></li>
          <li><Link to="/Remote_Controlled/Pneus">Pneus</Link></li>
          <li><Link to="/Remote_Controlled/Servomoteurs">Servomoteurs</Link></li>
          <li><Link to="/Remote_Controlled/Telecommandes">Télécommandes</Link></li>
          <li><Link to="/Remote_Controlled/Transmission">Transmissions</Link></li>
         
        </ul>
      </li>
      <li><Link to="/Comment">Votre Commentaire</Link></li>
      <li>
        <Link to="/LoadingPage">
          <button className="login-button">Login</button>
        </Link>
        <li>
        <Link to="/Panier">Panier</Link>
      </li>
      </li>
    </ul>
  </nav>
);

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.scss';

// const Navbar = () => (
//   <nav className="navbar">
//     <ul className="main">
//     <li>
//       <div className="logo">
//         <img src="../src/Images/LOGO.png"  />
//       </div>
//       </li>
//       <li><Link to="/">Accueil</Link></li>
//       <li><Link to="/News">Nouveautés</Link></li>
//       <li><Link to="/About">À propos</Link></li>
//       <li className="main__el">
//         <Link to="/Pages/Drones">Drones FPV</Link>
//         <ul className="drop menu1">
//           <li><Link to="/Pages/Drones/Antennes">Antennes</Link></li>
//           <li><Link to="/Pages/Drones/Batteries">Batteries</Link></li>
//           <li><Link to="/Pages/Drones/Cameras_FPV">Caméras</Link></li>
//           <li><Link to="/Pages/Drones/Chassis_FPV">Châssis</Link></li>
//           <li><Link to="/Pages/Drones/ESC_FPV">ESC</Link></li>
//           <li><Link to="/Pages/Drones/FC">FC</Link></li>
//           <li><Link to="/Pages/Drones/Moteurs">Moteurs</Link></li>
//           <li><Link to="/Pages/Drones/Radios_FPV">Radios</Link></li>
//           <li><Link to="/Pages/Drones/Recepteurs">Récepteurs</Link></li>
//           <li><Link to="/Pages/Drones/Systemes_videos">Systèmes Vidéos</Link></li>
          
//         </ul>
//       </li>
//       <li>
//         <Link to="/Remote_Controlled">Voitures télécommandées</Link>
//         <ul className="drop menu2">
//           <li><Link to="/Remote_Controlled/Batteries">Batteries</Link></li>
//           <li><Link to="/Remote_Controlled/Cameras">Caméras</Link></li>
//           <li><Link to="/Remote_Controlled/Chassis">Châssis</Link></li>
//           <li><Link to="/Remote_Controlled/ESC">ESC</Link></li>
//           <li><Link to="/Remote_Controlled/Pneus">Pneus</Link></li>
//           <li><Link to="/Remote_Controlled/Servomoteurs">Servomoteurs</Link></li>
//           <li><Link to="/Remote_Controlled/Telecommandes">Télécommandes</Link></li>
//           <li><Link to="/Remote_Controlled/Transmission">Transmissions</Link></li>
         
//         </ul>
//       </li>
//       <li><Link to="/Comment">Votre Commentaire</Link></li>
//       <li>
//         <Link to="/LoadingPage">
//           <button className="login-button">Login</button>
//         </Link>
//         <li>
//         <Link to="/Panier">Panier</Link>
//       </li>
//       </li>
//     </ul>
//   </nav>
// );

// export default Navbar;
