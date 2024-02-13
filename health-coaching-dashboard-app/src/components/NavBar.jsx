import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#A827FB',
        color: 'white',
    },
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
}));

const DailyOverviewTab = styled(Paper)(({ theme }) => ({
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
}));

const NavBar = () => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent='center' padding="1rem">
        <Grid xs={1.5}>
          <DailyOverviewTab elevation={0}>Daily Overviews:</DailyOverviewTab>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Sunday</Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Monday</Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Tuesday</Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Wednesday</Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Thursday</Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Friday</Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>Saturday</Item>
        </Grid>    
      </Grid>
    </Box>
  )
}

export default NavBar