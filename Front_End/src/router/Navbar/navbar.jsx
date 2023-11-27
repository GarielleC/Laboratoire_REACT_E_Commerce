
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../Images/LOGO.jpg';
import './navbar.scss'

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className="logo">
        <img src={Logo} alt="Logo" />
      </Button>
       <Button
        className="basic-button"
      >
        <Link to='/'>Acceuil</Link>
      </Button>
      <Button>
        <Link to='about'>A Propos</Link>
      </Button>
      <Button>
        <Link to='news'>Nouveautés</Link>
      </Button>

      {/* menu pour le drone */}
      <Button
        className="Drones"
        aria-controls={open ? 'drones' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Drones
      </Button>
      <Menu
        id="drones"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Antennes</MenuItem>
        <MenuItem onClick={handleClose}>Batteries</MenuItem>
        <MenuItem onClick={handleClose}>Caméras</MenuItem>
        <MenuItem onClick={handleClose}>Chassis</MenuItem>
        <MenuItem onClick={handleClose}>ESC</MenuItem>
        <MenuItem onClick={handleClose}>FC</MenuItem>
        <MenuItem onClick={handleClose}>Moteurs</MenuItem>
        <MenuItem onClick={handleClose}>Radios</MenuItem>
        <MenuItem onClick={handleClose}>Récepteurs</MenuItem>
        <MenuItem onClick={handleClose}>Systèmes vidéos</MenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? 'voitures' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Voitures
      </Button>
      <Menu
        id="voitures"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Antennes</MenuItem>
        <MenuItem onClick={handleClose}>Batteries</MenuItem>
        <MenuItem onClick={handleClose}>Caméras</MenuItem>
        <MenuItem onClick={handleClose}>Chassis</MenuItem>
        <MenuItem onClick={handleClose}>ESC</MenuItem>
        <MenuItem onClick={handleClose}>FC</MenuItem>
        <MenuItem onClick={handleClose}>Moteurs</MenuItem>
        <MenuItem onClick={handleClose}>Radios</MenuItem>
        <MenuItem onClick={handleClose}>Récepteurs</MenuItem>
        <MenuItem onClick={handleClose}>Sysèmes vidéos</MenuItem>
      </Menu>

      <Button>
        <Link to='comment'>Votre Commentaire</Link>
      </Button>
      
        <Button classname = 'login-button'>
        <Link to='login'>Login</Link>
      </Button>
      <Button>
        <Link to='panier'>Panier</Link>
      </Button>
      
    </div>
  );
}

export default BasicMenu;