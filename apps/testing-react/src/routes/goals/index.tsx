import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack, Tooltip
} from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import { useGetGoals } from '../../data-access/goals/use-get-goals';

const styles = {
  list: {
    width: '100%',
    backgroundColor: 'background.paper'
  }
};

export function Goals() {
  const [checked, setChecked] = useState<any>({});
  const navigate = useNavigate();
  const { data: goals } = useGetGoals();

  useEffect(() => {
    if(!goals?.length) return;

    const tempChecked = goals.reduce((acc: any, { id, done }) => {
      acc[id] = done;
      return acc;
    }, {});

    setChecked(tempChecked);
  }, [goals]);

  const handleView = (id: number) => () => {
    navigate(`${id}`);
  };

  const handleToggle = (id: number) => () => {
    const isChecked = checked[id];
    const newChecked = {...checked};

    newChecked[id] = !isChecked;

    setChecked(newChecked);
  };

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Your Goals</Typography>
      <List sx={styles.list}>
        {goals.map(({ id, title }) => {
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem
              key={id}
              secondaryAction={
                <Tooltip title='View Goal'>
                  <IconButton edge='end' aria-label='View Goal' onClick={handleView(id)}>
                    <PreviewIcon />
                  </IconButton>
                </Tooltip>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked[id] || false}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  )
}
