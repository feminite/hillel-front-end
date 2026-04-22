import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  CircularProgress 
} from '@mui/material';
import HotelCard from '../components/HotelCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
<style>{` .MuiGrid-container { width: 100% !important; } `}</style>

const Results = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCity = location.state?.destination;

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/hotels')
      .then(res => res.json())
      .then(data => {
        if (selectedCity) {
          const filtered = data.filter(hotel => 
            hotel.city.toLowerCase() === selectedCity.toLowerCase()
          );
          setHotels(filtered);
        } else {
          setHotels(data);
        }
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [selectedCity]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
        <CircularProgress sx={{ color: '#ff9800' }} />
        <Typography sx={{ mt: 2 }}>Searching for hotels...</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4, width: '100%' }}>
      <Box sx={{ width: '100%', textAlign: 'left', mb: 3 }}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate('/')}
          sx={{ color: '#ff9800', mb: 2 }}
        >
          Back to Search
        </Button>

        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
          Hotels in {selectedCity || 'All Locations'}
        </Typography>
      </Box>

      {hotels.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Sorry, no hotels found in {selectedCity}.
        </Typography>
      ) : (
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)', 
              md: 'repeat(3, 1fr)'
            },
            gap: 3, 
            justifyContent: 'center',
            width: '100%',
            '& > div': {
              display: 'flex',
              width: '100%'
            }
          }}
        >
          {hotels.map(hotel => (
            <HotelCard 
              key={hotel.id} 
              name={hotel.name} 
              address={hotel.address} 
              city={hotel.city}
              rating={hotel.hotel_rating}
            />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Results;