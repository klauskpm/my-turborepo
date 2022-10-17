import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Stack
} from '@mui/material';

import { GoalsCheckList } from '@goal/feature-goal';

export function Goals() {
  const navigate = useNavigate();

  const handleView = (id: number) => () => {
    navigate(`${id}`);
  };

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Your Goals</Typography>
      <GoalsCheckList onClickView={handleView} />
    </Stack>
  )
}
