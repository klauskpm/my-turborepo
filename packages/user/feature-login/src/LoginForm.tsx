import { Box, Button, Paper, TextField, Typography } from "@mui/material";

const styles = {
  paper: {
    width: '450px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content'
  },
  actions: {
    marginTop: '16px'
  }
};

export interface LoginFormProps {
  onSubmit: Function
}

export function LoginForm(props: LoginFormProps) {
  const { onSubmit } = props;

  return (
    <Paper sx={styles.paper} elevation={3}>
      <Typography variant='h4'>Welcome</Typography>
      <TextField variant='outlined' label='E-mail' autoFocus margin='normal' />
      <TextField variant='outlined' label='Password' margin='normal' />
      <Box sx={styles.actions}>
        <Button variant='contained' onClick={() => onSubmit()}>Submit</Button>
      </Box>
    </Paper>
  )
}
