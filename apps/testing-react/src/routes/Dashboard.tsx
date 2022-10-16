import React from 'react';
import { Stack } from "@mui/material";
import { GoalsList } from '../ui/GoalsList';
import { SurveysList } from '../ui/SurveysList';

export function Dashboard() {
  return (
    <>
      <Stack spacing={2}>
        <GoalsList />
        <SurveysList />
      </Stack>
    </>
  )
}
