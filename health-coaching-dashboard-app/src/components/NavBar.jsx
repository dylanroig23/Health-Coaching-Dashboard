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
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/sunday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Sunday
            </Button>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/monday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Monday
            </Button>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/tuesday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Tuesday
            </Button>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/wednesday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Wednesday
            </Button>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/thursday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Thursday
            </Button>
          </Item>
        </Grid>
        <Grid xs={1.5}>
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/friday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Friday
            </Button>
          </Item>
        </Grid> 
        <Grid xs={1.5}>
          <Item elevation={8} sx={{ border: `2px solid ${'#548235'}` }}>
            <Button href="/saturday" sx={{ width: '100%', height: '100%', padding: 0, color: 'black', '&:hover': {color: 'white'}}}>
              Saturday
            </Button>
          </Item>
        </Grid>   
      </Grid>
    </Box>
  )
}

export default NavBar