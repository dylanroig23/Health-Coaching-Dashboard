import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { getWeeksArray } from "../scripts/getWeeksArray";

const WeekSelectorDropdown = ({ userData }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentDate = new Date();
  const startDate = new Date(userData[0].startDate);
  const weeksArray = getWeeksArray(startDate, currentDate, 12);

  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#548235" }}
      >
        Week Selector
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {weeksArray.map((index, count) => (
          <MenuItem key={index} onClick={handleClose}>
            <p>Week {String(count + 1)}</p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default WeekSelectorDropdown;
