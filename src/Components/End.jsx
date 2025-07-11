import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import HandImage from "../Images/hand.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function End() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#f4f6f8", p: 4, mt: 25,height:"570px" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: { xs: 2, md: 8 } ,mb:1}}>
            <Typography variant="overline" color="primary">
              ________
              <br />
              MODERN BUSINESS
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ width: "400px", mt: 3 }}
            >
              We spend one-third of our life at work.
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 20,
                backgroundColor: "#2f54eb",
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                borderRadius: "0",
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", mx: "auto" }}>
          <Box
            sx={{
              backgroundColor: "#0A0A3C",
              width: "800px",
              height: "600px",
              position: "absolute",
              mb: "10px",
              top:"1px",
              left: "200px",
              zIndex: 2,
            }}
          />

          <Box
            sx={{
              backgroundColor: "#375FF5",
              width: "210px",
              height: "200px",
              position: "absolute",
              top: "1px",
              left: "200px",
              zIndex: 3,
            }}
          />
            
         <Box
              component="img"
              src={HandImage}
              alt="Person"
              sx={{
                width: "550px",
                height: "400px",
                position: "absolute",
                top: "200px",
                left: "410px",
                zIndex: 4,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      </Box>

      <Box sx={{ p: 9 ,ml:4}}>
        <Grid container spacing={4}>
          <Grid item xs={15} md={4}>
            <Typography sx={{ width: "300px" }}>
              We make onboarding new employees ridiculously easy. On day one,
              they’re ready to go. And retaining them is easier.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 5}}>
              <Typography>Follow us on</Typography>
              <LinkedInIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </Box>
          </Grid>
          <Box sx={{right:"300px",position: "absolute",}}/>
          <Grid item xs={6} md={2} ml={50} >
            <Typography fontWeight="bold"sx={{left:"5px",}} >
              Home
            </Typography>
            <Typography mt={2}>Why Us</Typography>
            <Typography mt={2}>Deals</Typography>
          </Grid>
          <Grid item xs={6} md={2} ml={10}>
            <Typography fontWeight="bold" >
              Services
            </Typography>
            <Typography mt={2}>Case Studies</Typography>
            <Typography mt={2}>Plans</Typography>
          </Grid>
          <Grid item xs={12} md={4} ml={10} >
            <Typography fontWeight="bold" >
              Testimonials
            </Typography>
            <Typography mt={2}>About</Typography>
            <Typography mt={2}>FAQ</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  
  );
}