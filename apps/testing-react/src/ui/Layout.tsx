import React from 'react';
import { Grid, Paper } from '@mui/material';
import { Sidebar } from './Sidebar';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF'
  },
  paper: {
    width: '1080px',
    padding: '12px 16px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content'
  }
};

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const appLinks = ['Inbox', 'Starred', 'Send email', 'Drafts'];

  return (
    <Grid container justifyContent='center' sx={styles.container}>
      <Grid container component={Paper} elevation={2} sx={styles.paper}>
        <Grid item display='flex' flexDirection='row'>
          <Sidebar links={appLinks} />
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
}
