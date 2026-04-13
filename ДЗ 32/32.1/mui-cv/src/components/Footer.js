import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 3, mt: 'auto' }}>
    <Container maxWidth="lg">
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Катерина Писаненко
      </Typography>
      <Typography variant="body2" align="center">
        Email: <Link href="mailto:divad.zine@gmail.com" color="inherit">divad.zine@gmail.com</Link>
      </Typography>
    </Container>
  </Box>
);

export default Footer;