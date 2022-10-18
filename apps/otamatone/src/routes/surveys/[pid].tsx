import { useNavigate, useParams } from 'react-router-dom';
import { Button, Grid, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
          <Typography variant='body1'>{survey.title}</Typography>
          <Grid container spacing={2}>
            {survey.responses.map((response) => {
              return (
                <Grid item xs={4}>
                  <Paper>
                    <Typography variant='body2'>Question title: {response.questionTitle}</Typography>
                    <Typography variant='body2'>Answered: {response.percentage}%</Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
