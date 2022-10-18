import { Grid } from '@mui/material';
import { LoginForm } from '@user/feature-login';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#A5FCEC'
  }
};

function LoginPage() {
  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <LoginForm />
    </Grid>
  );
}

export default LoginPage;
