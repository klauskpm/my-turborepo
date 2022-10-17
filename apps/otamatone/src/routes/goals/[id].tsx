import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export function Goal() {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleReturn}>
          Return
        </Button>
      </Grid>
      <Grid item>
        <Typography variant='h5'>Your Goal</Typography>
      </Grid>
    </Grid>
  );
}
