import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const WeekSelectorDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={handleClose}>Week 1</MenuItem>
        <MenuItem onClick={handleClose}>Week 2</MenuItem>
        <MenuItem onClick={handleClose}>Week 3</MenuItem>
        <MenuItem onClick={handleClose}>Week 4</MenuItem>
        <MenuItem onClick={handleClose}>Week 5</MenuItem>
        <MenuItem onClick={handleClose}>Week 6</MenuItem>
        <MenuItem onClick={handleClose}>Week 7</MenuItem>
        <MenuItem onClick={handleClose}>Week 8</MenuItem>
        <MenuItem onClick={handleClose}>Week 9</MenuItem>
        <MenuItem onClick={handleClose}>Week 10</MenuItem>
        <MenuItem onClick={handleClose}>Week 11</MenuItem>
        <MenuItem onClick={handleClose}>Week 12</MenuItem>
      </Menu>
    </div>
  );
};

export default WeekSelectorDropdown;
