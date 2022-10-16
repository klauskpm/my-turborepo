import React from 'react';
import { Box, Grid, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar, SidebarLink } from "./Sidebar";

const styles = {
  container: {
    height: '100%',
    alignItems: 'center',
    background: '#C3D4FF'
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
    <Grid container justifyContent='center' sx={styles.container}>
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
