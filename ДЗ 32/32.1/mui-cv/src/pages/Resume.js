import { Typography, Paper, Link, Avatar, Grid, Chip, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Resume = () => (
  <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} sm={4} textAlign="center">
        <Avatar sx={{ 
          width: 150, 
          height: 150, 
          mx: 'auto', 
          bgcolor: 'primary.main' 
        }}>
          <PersonIcon sx={{ fontSize: 100 }} /> {/* Тут іконка замість тексту */}
        </Avatar>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h4" gutterBottom>Kateryna Pysanenko</Typography>
        <Typography variant="subtitle1" color="text.secondary">Markup Developer (Frontend Developer)</Typography>
        <Link href="http://www.diva-design.org.ua" target="_blank">http://www.diva-design.org.ua</Link>
      </Grid>
    </Grid>
    
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>Skills:</Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {['HTML/CSS', 'Web-design', 'Responsive Web Design', 'Bootstap', 'SASS', 'Git', 'Figma', 'jQuery', 'React', 'JavaScript', 'MUI'].map(skill => (
          <Chip key={skill} label={skill} color="primary" variant="outlined" />
        ))}
      </Box>
    </Box>
  </Paper>
);

export default Resume;