import React from 'react';
import { Typography } from '@mui/material';
import { GoalsList } from '../ui/GoalsList';

export function Dashboard() {
  return (
    <>
      <Typography variant='h2'>Dashboard</Typography>
      <GoalsList />
    </>
  )
}
