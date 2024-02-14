import React from "react";
import { Drawer, Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContactsIcon from "@mui/icons-material/Contacts";
import EditNoteIcon from "@mui/icons-material/EditNote";

const NavDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sidePanelItems = () => (
    <Box
      p={2}
      width="350px"
      textAlign="center"
      role="presentation"
      sx={{
        borderLeft: `8px solid ${"#548235"}`,
        height: "100%",
        bgcolor: "#CAF2C9",
      }}
    >
      <nav aria-label="additional nav links">
        <List sx={{ color: "#548235" }}>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ContactsIcon style={{ fontSize: 32, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button">Contact Information</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EditNoteIcon style={{ fontSize: 42, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button">REDCap Survey</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EmojiPeopleIcon style={{ fontSize: 42, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button">
                    Long-Term SMART Goals
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ border: `2px solid ${"#548235"}`, bgcolor: "white" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {sidePanelItems()}
      </Drawer>
    </>
  );
};

export default NavDrawer;
