import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { SurveyDetailsBox } from '@survey/ui';
import { useGetSurveyDetails } from '@survey/data-access';

export function SurveyDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const { data: survey } = useGetSurveyDetails(Number(params.pid));

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Button variant="outlined" startIcon={<ArrowBackIcon />} onClick={handleReturn}>
          Return
        </Button>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h5'>Surveys Details</Typography>
      </Grid>
      {!!survey && (
        <Grid item xs={12}>
          <SurveyDetailsBox title={survey.title} responses={survey.responses} />
        </Grid>
      )}
    </Grid>
  );
}
