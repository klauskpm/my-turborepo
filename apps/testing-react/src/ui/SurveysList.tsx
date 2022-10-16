import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper, Typography
} from '@mui/material';

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

export function SurveysList() {

  return (
    <Paper elevation={2} sx={styles.container}>
      <Typography variant='h5'>Your surveys</Typography>
      <List sx={styles.list}>
        {[0, 1, 2, 3].map((value) => {
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
    </Paper>
  )
}
