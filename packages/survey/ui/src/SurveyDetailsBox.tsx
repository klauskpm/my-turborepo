import { Grid, Typography } from '@mui/material';

import { SurveyResponseBox, SurveyResponseBoxProps } from './SurveyResponseBox';

export interface SurveyDetailsBoxProps {
  title: string
  responses: SurveyResponseBoxProps[]
}

export function SurveyDetailsBox({ title, responses }: SurveyDetailsBoxProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='body1'>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {responses.map(({ questionTitle, percentage }) => {
            return (
              <Grid item xs={4}>
                <SurveyResponseBox questionTitle={questionTitle} percentage={percentage} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
