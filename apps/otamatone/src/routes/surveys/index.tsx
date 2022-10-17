import React from 'react';
import { Typography, Stack, ListItem, ListItemButton, ListItemText, List } from '@mui/material';

import { useGetSurveys } from '@survey/data-access';

const styles = {
  list: {
    width: '100%',
    backgroundColor: 'background.paper'
  }
};

export function Surveys() {
  const { data: surveys } = useGetSurveys();

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Your Surveys</Typography>
      <List sx={styles.list}>
        {surveys.map(({ id, title }) => {
          const labelId = `survey-${id}`;

          return (
            <ListItem key={id} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  )
}
