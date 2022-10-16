import React from 'react';
import { Stack } from "@mui/material";
import { GoalsTodo } from '../ui/GoalsTodo';
import { UnansweredSurveys } from '../ui/UnansweredSurveys';

export function Dashboard() {
  return (
    <>
      <Stack spacing={2}>
        <GoalsTodo />
        <UnansweredSurveys />
      </Stack>
    </>
  )
}
