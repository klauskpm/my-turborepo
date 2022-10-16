import { Button, Grid, Paper, TextField, Typography, Box } from "@mui/material";

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF'
  },
  paper: {
    width: '450px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content'
  },
  actions: {
    marginTop: '16px'
  }
};

function Login() {
  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <Paper sx={styles.paper} elevation={3}>
        <Typography variant='h4'>Welcome</Typography>
        <TextField variant='outlined' label='E-mail' autoFocus margin='normal' />
        <TextField variant='outlined' label='Password' margin='normal' />
        <Box sx={styles.actions}>
          <Button variant='contained'>Submit</Button>
        </Box>
      </Paper>
    </Grid>
  );
}

export { Login };
