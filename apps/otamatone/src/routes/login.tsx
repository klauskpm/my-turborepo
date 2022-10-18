import { Grid } from '@mui/material';
import { LoginForm } from '@user/feature-login';
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF'
  }
};

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard')
  };

  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <LoginForm onSubmit={handleSubmit}/>
    </Grid>
  );
}

export { Login };
