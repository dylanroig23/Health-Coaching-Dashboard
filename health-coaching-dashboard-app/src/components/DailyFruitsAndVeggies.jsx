/*
    THIS CHART IS USING DUMMY DATA
    The Fitbit API functionality has not yet been built out with this chart
    as of 3/6/2024
*/

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#f2992c",
  },
  "& .MuiRating-iconHover": {
    color: "#f2992c",
  },
});

const RatingContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px", // Adjust the margin as needed
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 40,
});

const DailyFruitsAndVeggies = () => {
  return (
    <Box>
      <RatingContainer>
        <Typography>Fruits</Typography>
        <StyledRating
          defaultValue={3}
          max={6}
          icon={<CircleIcon fontSize="large" />}
          emptyIcon={<RadioButtonUncheckedIcon fontSize="large" />}
        />
      </RatingContainer>

      <RatingContainer>
        <Typography component="legend">Vegetables</Typography>
        <StyledRating
          defaultValue={3}
          max={6}
          icon={<CircleIcon fontSize="large" />}
          emptyIcon={<RadioButtonUncheckedIcon fontSize="large" />}
        />
      </RatingContainer>
    </Box>
  );
};

export default DailyFruitsAndVeggies;
