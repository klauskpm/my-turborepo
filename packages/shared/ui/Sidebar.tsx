import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MoveToInbox } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const styles = {
  active: {
    color: 'red'
  }
};

export interface SidebarLink {
  text: string,
  path: string
}

export interface SidebarProps {
  links: SidebarLink[]
}

export function Sidebar ({ links }: SidebarProps) {
  return (
    <Box>
      <List>
        {links.map((link, index) => (
          <ListItem key={link.text} disablePadding>
            <NavLink to={link.path}>
              {({isActive}) => (
                <ListItemButton sx={isActive ? styles.active : null}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
