import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const WeekSelectorDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async (updatedDate) => {
    await axios.put(
      `${process.env.REACT_APP_DB_URI}/sessionManager/updateWeekOfInterest`,
      { weekOfInterest: updatedDate }
    );

    setAnchorEl(null);
    window.location.reload();
  };

  const handleNoClick = () => {
    setAnchorEl(null);
  };

  const weeksArray = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10",
    "Week 11",
    "Week 12",
  ];

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
      <Menu anchorEl={anchorEl} open={open} onClose={handleNoClick}>
        {weeksArray.map((index, count) => (
          <MenuItem key={index} onClick={() => handleClose(`week${count + 1}`)}>
            <p>Week {String(count + 1)}</p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default WeekSelectorDropdown;
