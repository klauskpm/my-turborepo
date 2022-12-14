import React from 'react';
import { Stack } from "@mui/material";
import { GoalsTodo } from '@goal/feature-goal';
import { UnansweredSurveys } from '@survey/feature-reporting';

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
