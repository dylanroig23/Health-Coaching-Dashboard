import React from 'react'
import PageHeading from '../components/PageHeading'
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: `1px solid ${'#548235'}`,
}));

const WeeklyDashboard = () => {
  return (
    <>
      <PageHeading headingText="Welcome to User's Weekly Overview"/>
      <NavBar />
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item elevation={4}>Hours of Sleep</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Zone Minutes</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Sleep vs Zone</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Steps</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Servings of Fruits and Vegetables</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Healthy Meals</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>Activity Completion</Item>
            </Grid>
            <Grid xs={4}>
              <Item elevation={4}>User's Weekly SMART Goals</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default WeeklyDashboard