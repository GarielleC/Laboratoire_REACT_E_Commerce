import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './navbar.scss';

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
      <Button
        id="basic-button"
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
        <MenuItem onClick={handleClose}>Batteries</MenuItem>
        <MenuItem onClick={handleClose}>Antennes</MenuItem>
        <MenuItem onClick={handleClose}>ESC</MenuItem>
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
        <MenuItem onClick={handleClose}>Batteries</MenuItem>
        <MenuItem onClick={handleClose}>Antennes</MenuItem>
        <MenuItem onClick={handleClose}>ESC</MenuItem>
      </Menu>
      <Button
        id="basic-button"
      >
        <Link to='/'>Home</Link>
      </Button>
      <Button
        id="basic-button"
      >
        <Link to='about'>About</Link>
      </Button>
      
    </div>
  );
}

export default BasicMenu;