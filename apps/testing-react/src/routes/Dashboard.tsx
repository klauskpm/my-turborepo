import React from 'react';
import { Typography } from '@mui/material';
import { GoalsList } from '../ui/GoalsList';
import { SurveysList } from '../ui/SurveysList';

export function Dashboard() {
  return (
    <>
      <Typography variant='h2'>Dashboard</Typography>
      <GoalsList />
      <SurveysList />
    </>
  )
}
