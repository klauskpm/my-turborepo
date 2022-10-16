import { Grid, Paper, Typography } from "@mui/material";

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
  }
};

function Dashboard() {
  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <Paper sx={styles.paper} elevation={2}>
        <Typography variant='h3'>Dashboard</Typography>
      </Paper>
    </Grid>
  )
}

export { Dashboard };
