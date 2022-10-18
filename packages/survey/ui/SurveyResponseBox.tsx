import { Paper, Typography } from '@mui/material';

export interface SurveyResponseBoxProps {
  questionTitle: string
  percentage: number
}

export function SurveyResponseBox({ questionTitle, percentage }: SurveyResponseBoxProps) {
  return (
    <Paper>
      <Typography variant='body2'>Question title: {questionTitle}</Typography>
      <Typography variant='body2'>Answered: {percentage}%</Typography>
    </Paper>
  );
}
