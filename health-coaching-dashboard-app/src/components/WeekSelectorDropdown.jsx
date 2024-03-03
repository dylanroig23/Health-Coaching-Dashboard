import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function generateWeeksArray(
  startDate,
  currentDate,
  interventionDurationInWeeks
) {
  const weeksArray = [];
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

  // Iterate through each week
  for (let i = 0; i < interventionDurationInWeeks; i++) {
    const weekStartDate = new Date(
      startDate.getTime() + i * oneWeekInMilliseconds
    );

    // Check if the week has not occurred yet
    if (weekStartDate <= currentDate) {
      weeksArray.push(weekStartDate);
    }
  }

  return weeksArray;
}

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
  console.log(userData);
  console.log(userData[0].startDate);
  const startDate = new Date(userData[0].startDate);
  const weeksArray = generateWeeksArray(startDate, currentDate, 12);

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
