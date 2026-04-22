import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Rating, 
  Box 
} from '@mui/material';

const HotelCard = ({ name, address, city, rating }) => {
  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%', 
      flexGrow: 1,
      boxShadow: 2 
    }}>
      
      <CardMedia
        component="div"
        sx={{
          height: 140,
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
        }}
      >
        140 x 140
      </CardMedia>

      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ mb: 1 }}>
          <Rating value={rating} precision={0.5} readOnly size="small" />
        </Box>

        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ fontWeight: 'bold', fontSize: '1.1rem', mb: 1, lineHeight: 1.2 }}
        >
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          city: {city}, state: NY, country code:
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HotelCard;