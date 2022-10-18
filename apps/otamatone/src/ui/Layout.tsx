import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Profile } from '@user/feature-profile';
import { Sidebar, SidebarLink } from '@shared/ui';
import otamatone_logo from '../assets/logo_otamatone.svg';

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF',
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

export function Layout() {
  const appLinks: SidebarLink[] = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'Goals', path: '/goals' },
    { text: 'Surveys', path: '/surveys' },
  ];

  return (
    <Grid container sx={styles.container}>
      <Grid item sx={styles.header}>
        <img src={otamatone_logo} alt="" />
        <Profile />
      </Grid>
      <Grid container component={Paper} elevation={2} sx={styles.paper}>
        <Grid item display='flex' flexDirection='row'>
          <Sidebar links={appLinks} />
          <Box sx={styles.content}>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
