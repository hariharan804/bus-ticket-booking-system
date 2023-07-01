import { Box, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box
      p={1}
      sx={{
        backgroundColor: '#30287E',
      }}
    >
      <Typography textAlign={'center'} sx={{ color: 'common.white' }}>
        © 2023 Bus Ticket Booking System, Inc.
      </Typography>
    </Box>
  );
}

export default Footer;
