import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

import { Profile } from '@user/feature-profile';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#A5FCEC',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'row',
    width: '1080px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    width: '1080px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content'
  },
  content: {
    background: '#F6F5F0',
    flex: 1,
    padding: '24px 32px',
    borderRadius: '0 4px 4px 0'
  }
};

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Grid container sx={styles.container}>
      <Grid item sx={styles.header}>
        <img src='#' alt="" />
        <Profile />
      </Grid>
      <Grid container component={Paper} elevation={2} sx={styles.paper}>
        <Grid item display='flex' flexDirection='row'>
          <Box sx={styles.content}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
