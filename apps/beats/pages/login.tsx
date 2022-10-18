import { Grid } from '@mui/material';
import { useRouter } from 'next/router';

import { LoginForm } from '@user/feature-login';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#A5FCEC'
  }
};

function LoginPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('surveys');
  };

  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <LoginForm onSubmit={handleSubmit} />
    </Grid>
  );
}

export default LoginPage;
