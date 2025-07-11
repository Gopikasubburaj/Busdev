import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { PhoneInTalk } from '@mui/icons-material';
import LogoImage from '../Images/busdev logo.jpg'
function Home() {
  return (
    <Box>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <img src={LogoImage} alt="" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexGrow: 1,
              flexWrap: 'wrap',
            }}
          >
            <Typography>Service</Typography>
            <Typography>Why Us</Typography>
            <Typography>Testimonial</Typography>
            <Typography>FAQ</Typography>
            <Typography>About</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
              justifyContent: 'flex-end', }} >
            <Button variant="outlined" color="black" startIcon={<PhoneInTalk />}>
              +1 (555) 123-4567
            </Button>
            <Button variant="contained" color="primary">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Box>
    
  );
}

export default Home;