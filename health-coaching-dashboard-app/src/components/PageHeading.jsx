//import * as React from 'react';
import React from 'react';
import { Box, ThemeProvider } from '@mui/system';

const PageHeading = ({ headingText }) => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#a9d18e',
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 125,
          borderRadius: 2,
          bgcolor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          border: `2px solid ${'#548235'}`, 
        }}
      >
        <h1
            style={{
                color: 'white',
                fontSize: '3rem',
                paddingLeft: '1rem'
            }}
        >{ headingText || "Pass a prop to this component to change header"}</h1>
      </Box>
    </ThemeProvider>
  );
}

export default PageHeading;
