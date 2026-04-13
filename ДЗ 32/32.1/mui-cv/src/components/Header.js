import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>My Resume (CV)</Typography>
      <Stack direction="row" spacing={2}>
        <Button color="inherit" component={Link} to="/">About me</Button>
        <Button color="inherit" component={Link} to="/todo">TODO List</Button>
        <Button color="inherit" component={Link} to="/swapi">Projects</Button>
      </Stack>
    </Toolbar>
  </AppBar>
);

export default Header;