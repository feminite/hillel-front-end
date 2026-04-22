import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box
} from '@mui/material';

const Header = () => {
  const location = useLocation();

  const getBtnStyles = (path) => {
    const isActive = location.pathname === path;
    
    return {
      fontWeight: 'bold',
      minWidth: 100,
      height: 45,
      borderRadius: 2,
      ml: 2,
      bgcolor: isActive ? 'transparent' : '#ff9800',
      color: isActive ? '#333' : 'white',
      border: isActive ? '1px solid #ddd' : 'none',
      '&:hover': {
        bgcolor: isActive ? '#f5f5f5' : '#e68a00',
      }
    };
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: 'white', 
        color: '#333', 
        boxShadow: 'none', 
        borderBottom: '1px solid #e0e0e0',
        height: 150,
        justifyContent: 'center'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 35, height: 35, bgcolor: '#ff9800', borderRadius: '50%' }} />
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
            Booking
          </Typography>
        </Box>

        <Box>
          <Button
            component={NavLink}
            to="/"
            sx={getBtnStyles('/')}
          >
            HOME
          </Button>
          
          <Button
            component={NavLink}
            to="/about"
            sx={getBtnStyles('/about')}
          >
            ABOUT
          </Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;