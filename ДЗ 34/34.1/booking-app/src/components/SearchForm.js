import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { 
  Box, Button, TextField, MenuItem, FormControl, 
  InputLabel, Select, Paper, FormHelperText 
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const SearchForm = () => {
  const [destinations, setDestinations] = useState([]);
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/destination')
      .then(res => res.json())
      .then(data => setDestinations(data));
  }, []);

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      checkIn: data.checkIn ? data.checkIn.format('YYYY-MM-DD') : '',
      checkOut: data.checkOut ? data.checkOut.format('YYYY-MM-DD') : ''
    };
    navigate('/results', { state: formattedData });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={3} sx={{ p: 3, mx: 'auto', mt: -4, maxWidth: 1100, borderRadius: 2 }}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <FormControl sx={{ minWidth: 200 }} error={!!errors.destination}>
            <InputLabel>Destination</InputLabel>
            <Controller
              name="destination"
              control={control}
              defaultValue=""
              rules={{ required: 'Оберіть місто' }}
              render={({ field }) => (
                <Select {...field} label="Destination">
                  {destinations.map(dest => (
                    <MenuItem key={dest.id} value={dest.label}>{dest.label}</MenuItem>
                  ))}
                </Select>
              )}
            />
            <FormHelperText>{errors.destination?.message}</FormHelperText>
          </FormControl>

          <Controller
            name="checkIn"
            control={control}
            defaultValue={null}
            rules={{ required: 'Дата обов’язкова' }}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Check In"
                slotProps={{
                  textField: {
                    error: !!errors.checkIn,
                    helperText: errors.checkIn?.message,
                  },
                }}
              />
            )}
          />

          <Controller
            name="checkOut"
            control={control}
            defaultValue={null}
            rules={{ required: 'Дата обов’язкова' }}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Check Out"
                slotProps={{
                  textField: {
                    error: !!errors.checkOut,
                    helperText: errors.checkOut?.message,
                  },
                }}
              />
            )}
          />

          <Controller
            name="adults"
            control={control}
            defaultValue={1}
            render={({ field }) => (
              <TextField {...field} label="Adults" type="number" sx={{ width: 80 }} />
            )}
          />

          <Controller
            name="children"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <TextField {...field} label="Children" type="number" sx={{ width: 80 }} />
            )}
          />

          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              bgcolor: '#ff9800', 
              '&:hover': { bgcolor: '#e68a00' }, 
              height: 56, 
              px: 4,
              fontWeight: 'bold' 
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default SearchForm;