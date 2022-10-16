import { Mail, MoveToInbox } from '@mui/icons-material';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF'
  },
  paper: {
    width: '1080px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content'
  },
  active: {
    color: 'red'
  }
};

function Dashboard() {
  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <Paper sx={styles.paper} elevation={2}>
        <Typography variant='h3'>Dashboard</Typography>
        <Box>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <NavLink to={`#${text}`}>
                  {({isActive}) => (
                    <ListItemButton sx={isActive ? styles.active : null}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
    </Grid>
  )
}

export { Dashboard };
