import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

const styles = {
  paper: {
    width: '600px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column'
  }
};

function Login() {
  return (
    <Grid container justifyContent='center'>
      <Paper sx={styles.paper}>
        <Typography variant='h4'>Welcome</Typography>
        <TextField variant='outlined' label='E-mail' autoFocus />
        <TextField variant='outlined' label='Password' />
        <Button>Submit</Button>
      </Paper>
    </Grid>
  );
}

export { Login };
