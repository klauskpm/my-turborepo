import { Mail, MoveToInbox } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  active: {
    color: 'red'
  }
};

export interface SidebarProps {
  links: string[]
}

export function Sidebar ({ links }: SidebarProps) {
  return (
    <Box>
      <List>
        {links.map((text, index) => (
          <ListItem key={text} disablePadding>
            <NavLink to={`#${text}`}>
              {({isActive}) => (
                <ListItemButton sx={isActive ? styles.active : null}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              )}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
