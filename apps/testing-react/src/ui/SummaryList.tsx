import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper, Typography
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const styles = {
  container: {
    padding: '16px 24px',
    width: '100%'
  },
  list: {
    width: '100%',
    backgroundColor: 'background.paper'
  }
};

export interface SummaryListProps {
  title: string
  list: number[]
  linkTo: string
}

export function SummaryList({ title, list, linkTo }: SummaryListProps) {

  return (
    <Paper elevation={2} sx={styles.container}>
      <Typography variant='h6'>{title}</Typography>
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
      <Link component={RouterLink} to={linkTo}>View all</Link>
    </Paper>
  )
}
