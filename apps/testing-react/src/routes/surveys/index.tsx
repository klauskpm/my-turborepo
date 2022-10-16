import React from 'react';
import { Typography, Stack, ListItem, ListItemButton, ListItemText, List } from '@mui/material';

const styles = {
  list: {
    width: '100%',
    backgroundColor: 'background.paper'
  }
};

export function Surveys() {
  const list = [0, 1, 2, 3];

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Your Surveys</Typography>
      <List sx={styles.list}>
        {list.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  )
}
