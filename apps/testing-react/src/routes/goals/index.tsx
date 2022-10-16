import React, { useState } from 'react';
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

const styles = {
  list: {
    width: '100%',
    backgroundColor: 'background.paper'
  }
};

export function Goals() {
  const [checked, setChecked] = useState([0]);
  const navigate = useNavigate();

  const handleView = (id: number) => () => {
    navigate(`${id}`);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Stack spacing={2}>
      <Typography variant='h4'>Your Goals</Typography>
      <List sx={styles.list}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <Tooltip title='View Goal'>
                  <IconButton edge='end' aria-label='View Goal' onClick={handleView(value)}>
                    <PreviewIcon />
                  </IconButton>
                </Tooltip>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  )
}
