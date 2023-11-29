import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../Images/LOGO.jpg';
import './navbar.scss';

const BasicMenu = () => {
  const [anchorElDrones, setAnchorElDrones] = useState(null);
  const [anchorElVoitures, setAnchorElVoitures] = useState(null);

  const handleClickDrones = (event) => {
    setAnchorElDrones(event.currentTarget);
  };

  const handleClickVoitures = (event) => {
    setAnchorElVoitures(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElDrones(null);
    setAnchorElVoitures(null);
  };

  return (
    <div>
      <Button className="logo">
        <img src={Logo} alt="Logo" />
      </Button>
      <Button className="basic-button">
        <Link to='/'>Accueil</Link>
      </Button>
      <Button>
        <Link to='/About'>À Propos</Link>
      </Button>
      <Button>
        <Link to='/News'>Nouveautés</Link>
      </Button>

      {/* menu pour le drone */}
      <Button
        className="Drones"
        aria-controls={anchorElDrones ? 'menu-drones' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorElDrones ? 'true' : undefined}
        onClick={handleClickDrones}
      >
        Drones
      </Button>
      <Menu
        id="menu-drones"
        anchorEl={anchorElDrones}
        open={Boolean(anchorElDrones)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-drones',
        }}
      >
        <MenuItem component={Link} to="/drones/antennes" onClick={handleClose}>Antennes</MenuItem>
        <MenuItem component={Link} to="/drones/batteries_FPV" onClick={handleClose}>Batteries</MenuItem>
        <MenuItem component={Link} to="/drones/cameras_FPV" onClick={handleClose}>Caméras</MenuItem>
        <MenuItem component={Link} to="/drones/chassis_FPV" onClick={handleClose}>Chassis</MenuItem>
        <MenuItem component={Link} to="/drones/ESC" onClick={handleClose}>ESC</MenuItem>
        <MenuItem component={Link} to="/drones/FC" onClick={handleClose}>FC</MenuItem>
        <MenuItem component={Link} to="/drones/moteurs" onClick={handleClose}>Moteurs</MenuItem>
        <MenuItem component={Link} to="/drones/radios_FPV" onClick={handleClose}>Radios</MenuItem>
        <MenuItem component={Link} to="/drones/recepteurs" onClick={handleClose}>Récepteurs</MenuItem>
        <MenuItem component={Link} to="/drones/systemes_videos" onClick={handleClose}>Systèmes vidéos</MenuItem>
      </Menu>

      {/* Menu pour la voiture */}
      <Button
        className="voitures"
        aria-controls={anchorElVoitures ? 'menu-voitures' : undefined}
        aria-haspopup="true"
        aria-expanded={anchorElVoitures ? 'true' : undefined}
        onClick={handleClickVoitures}
      >
        Voitures
      </Button>
      <Menu
        id="menu-voitures"
        anchorEl={anchorElVoitures}
        open={Boolean(anchorElVoitures)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-voitures',
        }}
      >
        <MenuItem component={Link} to="/Remote_Controlled/Batteries" onClick={handleClose}>Batteries</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Cameras" onClick={handleClose}>Caméras</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Chassis" onClick={handleClose}>Chassis</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/ESC" onClick={handleClose}>ESC</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Pneus" onClick={handleClose}>Pneus</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Servomoteurs" onClick={handleClose}>Servomoteurs</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Suspensions" onClick={handleClose}>Suspensions</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Telecommandes" onClick={handleClose}>Télécommandes</MenuItem>
        <MenuItem component={Link} to="/Remote_Controlled/Transmissions" onClick={handleClose}>Transmissions</MenuItem>
      </Menu>

      <Button>
        <Link to='/Comment'>Votre Commentaire</Link>
      </Button>
      
      <Button className='login-button'>
        <Link to='/Login'>Login</Link>
      </Button>
      
      <Button>
        <Link to='/Panier'>Panier</Link>
      </Button>
    </div>
  );
}

export default BasicMenu;
