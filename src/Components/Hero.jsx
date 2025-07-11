import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import Image1 from "../Images/1.jpg"
import Image2 from "../Images/2.jpg"
import Image3 from "../Images/4.jpg"
import Image4 from "../Images/6.jpg"

export default function HeroSection() {
  return (
    <Box sx={{ flexGrow: 1, mt:5}}>
      <Grid container spacing={2}>       
        <Grid size={{lg:6}}>
            <Box sx={{ display:"flex", justifyContent:"center",mt:5}}>
                <Box sx={{width:"390px"}}>
          <Typography variant="overline" color="primary">
            ________<br/>
            MODERN BUSINESS
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 2 }}>
            We spend one-third of our life at work.
          </Typography>
          </Box>
          </Box>
          <Box sx={{display:"flex", justifyContent:"end",mt:5,mr:2, left:"680px",position: "absolute",
          }}>
          <Box sx={{backgroundColor:"#0F1248", width:"60px", height:"60px"}} />
          </Box>
        </Grid>
        <Grid  size={{lg:3}}>
          <Box
            sx={{
              bgcolor: '#3366FF',
              color: 'white',
              p: 1,
              mt:4,
              width:'350px',
              height: '340px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: "absolute",
            }}
          >
            <Avatar
              alt="User"
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              sx={{ width: 60, height: 60, mb: 2 ,}}
            />
            <Typography variant="body1" align="center">
              “ Your site is always my only go-to option for fragrances “
            </Typography>
          </Box>
        </Grid>
         <Grid  size={{lg:3}}>
          
          <img src={Image4} alt="" style={{height:'300px',height:'360px',marginTop:'27px',}} />
          
        </Grid>
        <Grid  size={{lg:3}}>
          <img src={Image1} alt=""  style={{ width:'350px',height:'350px'}}/>
        </Grid>
       
  <Grid item lg={5}>
    <img src={Image2} alt=""
     style={{ width: "350px",height:'340px',   alignItems: 'center'}} />
  </Grid>

        <Grid  size={{lg:3}}>
          <Box
            sx={{
              bgcolor: '#0a0f3d',
              color: 'white',
              position: "absolute",
              p: 3,
              ml:2,
              width:'320px',
              height: '295px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
              3.2x
            </Typography>
            <Typography variant="body1" align="center">
              Average Revenue Growth per Successful Client
            </Typography>
          </Box>
        </Grid>
           <Box sx={{
            width:"350"
           }}/>
        <Grid  size={{lg:3}}>

          <img src={Image3} 
         />
        </Grid>
      </Grid>
    </Box>
    
  );
}