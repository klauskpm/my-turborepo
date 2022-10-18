import { Grid } from '@mui/material';
import { LoginForm } from '@user/feature-login';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF'
  }
};

function Login() {
  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <LoginForm />
    </Grid>
  );
}

export { Login };
