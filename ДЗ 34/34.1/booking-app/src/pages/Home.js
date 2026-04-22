import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <Box component="main">
      <SearchForm />

      <Container maxWidth="lg" sx={{ mt: 8, px: { xs: 2, md: 6 } }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2 
          }}
        >
          Travel With <span style={{ color: '#ff9800' }}>Booking</span>
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            lineHeight: 1.8,
            fontSize: '1.1' 
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;