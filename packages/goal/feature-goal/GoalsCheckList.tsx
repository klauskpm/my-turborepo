import React, { useEffect, useState } from 'react';
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip
} from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';

import { useGetGoals } from '@goal/data-access';

const styles = {
  list: {
    width: '100%',
    backgroundColor: 'background.paper'
  }
};

export interface GoalsCheckListProps {
  onClickView: Function
}

export function GoalsCheckList(props: GoalsCheckListProps) {
  const { onClickView } = props;
  const [checked, setChecked] = useState<any>({});
  const { data: goals } = useGetGoals();

  useEffect(() => {
    if(!goals?.length) return;

    const tempChecked = goals.reduce((acc: any, { id, done }) => {
      acc[id] = done;
      return acc;
    }, {});

    setChecked(tempChecked);
  }, [goals]);

  const handleToggle = (id: number) => () => {
    const isChecked = checked[id];
    const newChecked = {...checked};

    newChecked[id] = !isChecked;

    setChecked(newChecked);
  };

  return (
    <List sx={styles.list}>
      {goals.map(({ id, title }) => {
        const labelId = `checkbox-list-label-${id}`;

        return (
          <ListItem
            key={id}
            secondaryAction={
              <Tooltip title='View Goal'>
                <IconButton edge='end' aria-label='View Goal' onClick={() => onClickView(id)}>
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
  );
}
