import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function SurveyDetails() {
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
        <Typography variant='h5'>Surveys Details</Typography>
      </Grid>
    </Grid>
  );
}
