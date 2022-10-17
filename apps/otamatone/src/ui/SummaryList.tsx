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
  list: number[] | any[]
  linkTo: string
}

export function SummaryList({ title, list, linkTo }: SummaryListProps) {

  return (
    <Paper elevation={2} sx={styles.container}>
      <Typography variant='h6'>{title}</Typography>
      <List sx={styles.list}>
        {list.map(({ id, title }) => {
          const labelId = `checkbox-list-label-${id}`;

          return (
            <ListItem key={id} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Link component={RouterLink} to={linkTo}>View all</Link>
    </Paper>
  )
}
