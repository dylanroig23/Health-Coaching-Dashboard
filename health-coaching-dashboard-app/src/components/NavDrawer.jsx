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
import CalendarViewIcon from "@mui/icons-material/CalendarMonth";
import WeekSelectorDropdown from "./WeekSelectorDropdown";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

const NavDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); //initial state of the NavDrawer is false/closed

  // returns the items that are inside of the NavDrawer
  const sidePanelItems = () => (
    <Box
      p={2}
      width="350px"
      textAlign="center"
      role="presentation"
      sx={{
        borderLeft: `8px solid ${"#548235"}`,
        height: "100%",
        bgcolor: "#e2f0d9",
      }}
    >
      <nav aria-label="additional nav links">
        <List sx={{ color: "#548235" }}>
          <ListItem>
            <ListItemButton href="/contact-info">
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
            <ListItemButton href="/redcap">
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
            <ListItemButton href="/smart-goals">
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
          <ListItem>
            <ListItemButton href="/adduser">
              <ListItemIcon>
                <AddIcon style={{ fontSize: 42, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="button">Add User</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <DoneOutlineIcon style={{ fontSize: 42, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button">
                    <WeekSelectorDropdown />
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/userlist">
              <ListItemIcon>
                <LogoutIcon style={{ fontSize: 42, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button">
                    Return to User Select
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton href="/calendar-view">
              <ListItemIcon>
                <CalendarViewIcon style={{ fontSize: 42, color: "#548235" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="button">Calendar View</Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );

  // returns the hamburger icon on the right of the PageHeading with click functionality
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        sx={{
          border: `2px solid ${"#548235"}`,
          bgcolor: "white",
          "&:hover": { backgroundColor: "#e2f0d9" },
        }}
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
