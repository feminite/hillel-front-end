import React, { useState, useEffect } from 'react';
import { 
  Typography, List, ListItem, ListItemText, Paper, 
  CircularProgress, ListItemAvatar, Avatar, Divider, Box
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myProjects = [
      { id: 1, name: 'Сайт-портфоліо', tech: 'React, MUI', desc: 'Персональний сайт з резюме та TODO' },
      { id: 2, name: 'Додаток погоди', tech: 'JavaScript, Fetch API', desc: 'Прогноз погоди у реальному часі' },
      { id: 3, name: 'Магазин на JS', tech: 'HTML, CSS, JS', desc: 'Простий лендинг з кошиком товарів' },
      { id: 4, name: 'Тестове завдання SWAPI', tech: 'React, Axios', desc: 'Робота з публічними API' }
    ];

    setTimeout(() => {
      setProjects(myProjects);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Paper sx={{ p: 4, maxWidth: 700, mx: 'auto', borderRadius: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
        <LaptopMacIcon color="primary" />My HILLEL Projects
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
          <CircularProgress />
        </Box>
      ) : (
        <List>
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ListItem alignItems="flex-start" sx={{ py: 2 }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'secondary.light' }}>
                    <CodeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="h6">{project.name}</Typography>}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                        Стек: {project.tech}
                      </Typography>
                      {` — ${project.desc}`}
                    </>
                  }
                />
                <GitHubIcon color="disabled" sx={{ ml: 2, cursor: 'pointer', '&:hover': { color: 'black' } }} />
              </ListItem>
              {index < projects.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default ProjectsPage;