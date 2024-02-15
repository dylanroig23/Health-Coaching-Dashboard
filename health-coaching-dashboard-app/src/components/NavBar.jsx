import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#a9d18e',
    },
    padding: theme.spacing(1),
    textAlign: 'center',
    border: `2px solid ${'#548235'}`,
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

const Day = styled(Button)(() => ({
    width: '100%', 
    height: '100%', 
    padding: 0, 
    color: 'black', 
    '&:hover': {
      color: 'white'
    }
}));

const NavBar = () => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent='center' padding="1rem">
        <Grid xs={1.5}>
          <DailyOverviewTab elevation={0}>Daily Overviews:</DailyOverviewTab>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/sunday">
              Sunday
            </Day>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/monday">
              Monday
            </Day>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/tuesday">
              Tuesday
            </Day>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/wednesday">
              Wednesday
            </Day>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/thursday">
              Thursday
            </Day>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/friday">
              Friday
            </Day>
          </Item>
        </Grid> 
        <Grid xs={1.5}>
          <Item elevation={8}>
            <Day href="/saturday">
              Saturday
            </Day>
          </Item>
        </Grid>   
      </Grid>
    </Box>
  )
}

export default NavBar