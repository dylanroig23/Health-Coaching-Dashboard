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
              <Item>graph 1</Item>
            </Grid>
            <Grid xs={4}>
              <Item>graph 2</Item>
            </Grid>
            <Grid xs={4}>
              <Item>graph 3</Item>
            </Grid>
            <Grid xs={4}>
              <Item>graph 4</Item>
            </Grid>
            <Grid xs={4}>
              <Item>graph 5</Item>
            </Grid>
            <Grid xs={4}>
              <Container maxWidth="xxl">
                <Grid container spacing={2}>
                  <Grid xs={12}>
                    <Item>Activity Completion</Item>
                  </Grid>
                  <Grid xs={12}>
                    <Item>Health Meals</Item>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default WeeklyDashboard